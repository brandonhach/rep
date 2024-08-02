'use server';
import { db } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { Rep, repSchema } from '@/types/schema';

export const addRep = async (data: Rep) => {
	const result = repSchema.safeParse(data);

	if (!result.success) {
		console.error('Validation error:', result.error.format());
		return { error: result.error.format() };
	} else {
		await db.rep.create({
			data: {
				userId: data.userId,
				profileId: data.profileId,
				description: data.description,
				rating: data.rating === 'true' ? true : false,
				keywords: data.keywords,
			},
		});
		revalidatePath(`/profile/${data.profileId}`);
		return { success: true };
	}
};
