'use server';
import { db } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { Rep } from '@/types/schema';

export const addRep = async (rep: Rep) => {
	console.log(rep);
	// const profileId = formData.get('profileId') as string;
	// const userId = formData.get('userId') as string;
	// const description = formData.get('description') as string;
	// const rating = formData.get('rating') === 'true';
	// const keywordsString = formData.get('keywords') as string;
	// const keywords = keywordsString.split(',').map((keyword) => keyword.trim());

	// await db.rep.create({
	// 	data: {
	// 		userId: userId,
	// 		profileId: profileId,
	// 		description: description,
	// 		rating: rating,
	// 		keywords: keywords,
	// 	},
	// });

	// revalidatePath(`/profile/${profileId}`);
	return rep;
};
