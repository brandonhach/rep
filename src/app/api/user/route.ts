import { db } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import argon2 from 'argon2';
import { signUpSchema } from '@/types/types';
import { ZodError } from 'zod';

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const result = signUpSchema.safeParse(body);

		// check out Zod's .flatten() method for an easier way to process errors
		if (!result.success) {
			const flattenedErrors = result.error.flatten();
			return NextResponse.json({ errors: flattenedErrors.fieldErrors }, { status: 400 });
		}

		if (!result.data) {
			return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
		}

		// destructure object from result
		const { username, email, password } = result.data;

		// check if username already exists
		const existingUserByUsername = await db.user.findUnique({
			where: { username: username },
		});
		if (existingUserByUsername) {
			return NextResponse.json(
				{ errors: { username: 'User with this username already exists' } },
				{ status: 409 }
			);
		}

		// check if email already exists
		const existingUserByEmail = await db.user.findUnique({
			where: { email: email },
		});
		if (existingUserByEmail) {
			return NextResponse.json({ errors: { email: 'User with this email already exists' } }, { status: 409 });
		}

		// hash password using argon2
		const hashedPassword = await argon2.hash(password);

		// store new user into db
		const newUser = await db.user.create({
			data: {
				username,
				email,
				password: hashedPassword,
			},
		});

		// remove password from json payload
		const { password: newUserPassword, ...rest } = newUser;

		return NextResponse.json({ user: rest, message: 'User created successfully' }, { status: 201 });
	} catch (error) {
		if (error instanceof ZodError) {
			// If the error is a ZodError, extract the error messages
			const flattenedErrors = error.flatten();
			return NextResponse.json({ errors: flattenedErrors.fieldErrors }, { status: 400 });
		}
		console.error(error);
		return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
	}
}

export default POST;

// To verify password
// const isMatch = await argon2.verify(hash, 'password');
