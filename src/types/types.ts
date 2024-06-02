import z from 'zod';

/**
 * Define schema for your forms here.
 */

// SignUp form
export const signUpSchema = z.object({
	username: z.string().min(3, '3 characters min.').max(20, '20 characters max.'),
	email: z.string().min(1, 'Email required.').email('Invalid email'),
	password: z.string().min(1, 'Password required.').min(8, '8 characters min.'),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;

// SignIn form
export const signInSchema = z.object({
	email: z.string().min(1, 'Email required.').email('Invalid email.'),
	password: z.string().min(1, 'Password required.').min(8, '8 characters min.'),
});

export type TSignInSchema = z.infer<typeof signInSchema>;

export const addAffiliationSchema = z.object({
	profileId: z.string().min(1, 'Require profileId'),
	userId: z.string().min(1, 'Require userId'),
});

export type TAddAffiliationSchema = z.infer<typeof addAffiliationSchema>;

export type TAffiliation = {
	id: string;
	affiliationTitle: string;
	affiliationRole: string;
	platform: string;
	platformImage: string;
	platformURL: string;
	verified: string;
	userId: string;
}