'use server';
import { DEFAULT_LOGIN_REDIRECT } from '@/route';
import { signInSchema } from '@/types/types';
import { signIn } from '@/auth';
import * as z from 'zod';
import { AuthError } from 'next-auth';

export const login = async (values: z.infer<typeof signInSchema>, callbackUrl?: string | null) => {
	const validatedFields = signInSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: 'Invalid fields' };
	}

	const { email, password } = validatedFields.data;

	try {
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
