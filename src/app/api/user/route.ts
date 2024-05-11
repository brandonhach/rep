import { db } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import argon2 from 'argon2';
import * as z from 'zod';

// Define schema for body (validation)
const userSchema = z.object({
	username: z.string().min(3, 'Username is required').max(20),
	email: z.string().min(1, 'Email is required').email('Invalid email'),
	password: z.string().min(1, 'Password is required').min(8, 'Password must have at least 8 characters'),
});

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { email, username, password } = userSchema.parse(body);

		// check if email already exists
		const existingUserByEmail = await db.user.findUnique({
			where: { email: email },
		});
		if (existingUserByEmail) {
			return NextResponse.json({ message: 'User with this email already exists' }, { status: 409 });
		}

		// check if username already exists
		const existingUserByUsername = await db.user.findUnique({
			where: { username: username },
		});
		if (existingUserByUsername) {
			return NextResponse.json({ message: 'User with this username already exists' }, { status: 409 });
		}

		// store new user into db
		const hashedPassword = await argon2.hash(password);
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
		console.error(error);
		return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
	}
}

export default POST;

// To verify password
// const isMatch = await argon2.verify(hash, 'password');
