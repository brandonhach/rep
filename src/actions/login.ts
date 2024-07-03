'use server';
import { signIn } from '@/auth';

export const login = async (formData: FormData) => {
	await signIn('resend', formData);
};
