import { z } from 'zod';

const logSchema = z.object({
	title: z.string().min(1, 'Title required.').max(50, 'Max length for title is 50 characters.'),
	description: z.string().min(1, 'Details required.').max(500, 'Max length for details is 500 characters.'),
});

export const repSchema = z.object({
	description: z.string().min(1, 'Description is required.').max(70, 'Max length for description is 70 characters.'),
	rating: z.union([z.enum(['true', 'false']), z.literal(null)]).refine((val) => val !== null, {
		message: 'Select a rating.',
	}), // boolean type
	keywords: z
		.array(z.string().min(1, 'Empty keyword.').max(10, 'Max length for keyword is 10 characters.'))
		.max(5, 'Max keyword accepted is 5.'),
	profileId: z.string().min(1),
	userId: z.string().min(1),
	log: logSchema,
});

export type Rep = z.infer<typeof repSchema>;

export const tab1Schema = repSchema.omit({ log: true });
export const tab2Schema = z.object({ log: logSchema });

export const repConfirmSchema = z.object({
	accuracy: z.boolean().refine((val) => val === true),
	understanding: z.boolean().refine((val) => val === true),
});

export type RepConfirm = z.infer<typeof repConfirmSchema>;
