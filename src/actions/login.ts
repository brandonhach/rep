'use server';
import { DEFAULT_LOGIN_REDIRECT } from '@/route';
import { signInSchema } from '@/types/types';
import { signIn } from '@/auth';
import * as z from 'zod';
import { AuthError } from 'next-auth';
import { db } from '@/lib/prisma';

export const login = async (values: z.infer<typeof signInSchema>, callbackUrl?: string | null) => {
	const validatedFields = signInSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: 'Invalid fields' };
	}

	const { email, password } = validatedFields.data;

	try {
		const existingUserByEmail = await db.user.findUnique({
			where: { email: email },
		});
		if (!existingUserByEmail) {
			return { error: { email: 'Account does not exist in records' } };
		}
		await signIn('credentials', {
			email,
			password,
			redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { error: 'Invalid credentials!' };

				default:
					return { error: 'Internal error', STATUS_CODES: 500 };
			}
		}
		throw error;
	}
};
