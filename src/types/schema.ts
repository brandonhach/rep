import { z } from 'zod';

const logSchema = z.object({ summary: z.string(), details: z.string() });

export const repSchema = z.object({
	description: z.string().min(4, 'This description is too short.').max(120, 'This description is too long.'),
	rating: z.boolean(),
	keywords: z.array(z.string().min(2, 'Keyword too short.').max(10, 'Keyword no longer than 10 characters.')),
	profileId: z.string().min(1),
	userId: z.string().min(1),
	log: logSchema,
});
