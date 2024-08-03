import { z } from 'zod';

// const logSchema = z.object({ title: z.string(), details: z.string() });

export const repSchema = z.object({
	description: z
		.string()
		.min(1, 'Description is required.')
		.max(120, 'Max length for description is 120 characters.'),
	rating: z.union([z.enum(['true', 'false']), z.literal(null)]).refine((val) => val !== null, {
		message: 'Select a rating.',
	}), // boolean type
	keywords: z
		.array(z.string().min(1, 'Empty keyword.').max(10, 'Max length for keyword is 10 characters.'))
		.max(5, 'Max keyword accepted is 5.'),
	profileId: z.string().min(1),
	userId: z.string().min(1),
});

export type Rep = z.infer<typeof repSchema>;
