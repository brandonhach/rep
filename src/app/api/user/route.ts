import { db } from '@/lib/prisma';
// import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { email, username, password } = body;

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
		// const hashedPassword = await hash(password, 10);
		const newUser = await db.user.create({
			data: {
				username,
				email,
				// password: hashedPassword,
				password,
			},
		});
		return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
	}
}

export default POST;
