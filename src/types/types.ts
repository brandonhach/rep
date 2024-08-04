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

export type TPlan = {
	title: string;
	badge: string;
	price: string;
	duration: string;
	checkList: string[];
	crossList: string[];
	disabled: boolean;
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
	postType: string;
	userId: string;
};

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
};

export const addMoodboardSchema = z.object({
	profileId: z.string().min(1, 'Require profileId'),
	userId: z.string().min(1, 'Require userId'),
});

export type TAddMoodboardSchema = z.infer<typeof addMoodboardSchema>;

export type TMoodboard = {
	id: string;
	moodboardImage: string;
	userId: string;
	profileId: string;
};
export const editTradePostSchema = z.object({
	profileId: z.string().min(1, 'Require profileId'),
	userId: z.string().min(1, 'Require userId'),
});

export type TEditTradePostSchema = z.infer<typeof editTradePostSchema>;

export const deleteTradePostSchema = z.object({
	profileId: z.string().min(1, 'Require profileId'),
	userId: z.string().min(1, 'Require userId'),
});

export type TDeleteTradePostSchema = z.infer<typeof deleteTradePostSchema>;

export enum StatusType {
	NONE = 'NONE',
	SAFE = 'SAFE',
	CAUT = 'CAUT',
	BAN = 'BAN',
}

export type TRep = {
	id: string;
	description: string;
	rating: boolean;
	logs: string;
	keywords: string[];
	createdAt: string;
	user: {
		name: string;
		image: string;
		country: string;
	};
	userId: string;
};

export type TProfileInfo = {
	id?: string;
	userId: string;
	description: string;
	backgroundImage: string;
	contacts: number;
	followers: number;
	likes: number;
	dislikes: number;
	status: StatusType;
	createdAt?: Date;
	updatedAt?: Date;
};
