'use server';
import { db } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { Rep, repSchema } from '@/types/schema';

export const addRep = async (data: Rep) => {
	const result = repSchema.safeParse(data);

	if (!result.success) {
		// console.error('Validation error:', result.error.format());
		return { error: result.error.format() };
	} else {
		// Create rep object
		const newRep = await db.rep.create({
			data: {
				userId: data.userId,
				profileId: data.profileId,
				description: data.description,
				rating: data.rating === 'true' ? true : false,
				keywords: Array.isArray(data.keywords) ? data.keywords : [data.keywords],
			},
		});

		// Finally, create log object with reference to rep
		await db.log.create({
			data: {
				title: data.log.title,
				description: data.log.description,
				repId: newRep.id,
			},
		});
		revalidatePath(`/profile/${data.profileId}`);
		return { success: true };
	}
};
