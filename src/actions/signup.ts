'use server';
import { signUpSchema } from '@/types/types';
import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/prisma';
import { getUserByEmail } from '@/model/user';

export const signup = async (values: z.infer<typeof signUpSchema>) => {
	const validatedFields = signUpSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: 'Invalid fields' };
	}

	const { email, password, username } = validatedFields.data;

	const existingUser = await getUserByEmail(email);
	if (existingUser) return { error: 'Email already in use!' };
	const hashedPassword = await bcrypt.hash(password, 10);

	await db.user.create({
		data: {
			username,
			email,
			password: hashedPassword,
		},
	});

	return { success: 'Email sent' };
};
