import z from 'zod';

/**
 * Define schema for your forms here.
 */

// SignUp form
export const signUpSchema = z.object({
	username: z
		.string()
		.min(3, 'Username cannot be less than 3 characters')
		.max(20, 'Username can only be a max of 20 characters'),
	email: z.string().min(1, 'Email is required').email('Invalid email'),
	password: z.string().min(1, 'Password is required').min(8, 'Password must have at least 8 characters'),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;

// SignIn form
export const signInSchema = z.object({
	email: z.string().min(1, 'Email is required').email('Invalid email'),
	password: z.string().min(1, 'Password is required').min(8, 'Password must have at least 8 characters'),
});

export type TSignInSchema = z.infer<typeof signInSchema>;
