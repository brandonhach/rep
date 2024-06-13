import z from 'zod';

/**
 * Define schema for your forms here.
 */

// SignUp form
export const signUpSchema = z.object({
	name: z.string().min(3, '3 characters min.').max(20, '20 characters max.'),
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

export const addCommentSchema = z.object({
	profileId: z.string().min(1, 'Require profileId'),
	userId: z.string().min(1, 'Require userId'),
	content: z.string().min(1, 'Require content'),
});

export type TAddCommentSchema = z.infer<typeof addCommentSchema>;

export type TComment = {
	id: string;
	name: string;
	content: string;
	emotes: string[];
	userId: string;
	createdAt: string;
	updatedAt: string;
	image: string;
	user: {
		name: string;
		image: string;
	};
};

export const addTradePostSchema = z.object({
	profileId: z.string().min(1, 'Require profileId'),
	userId: z.string().min(1, 'Require userId'),
});

export type TAddTradePostSchema = z.infer<typeof addTradePostSchema>;

export type TTradePost = {
	id: string;
	title: string;
	image: string;
	description: string;
	price: string;
	postType: string
	userId: string;
	createdAt: string;
	updatedAt: string;
};

export const editTradePostSchema = z.object({
	profileId: z.string().min(1, 'Require profileId'),
	userId: z.string().min(1, 'Require userId'),
});

export type TEditTradePostSchema = z.infer<typeof addTradePostSchema>;
