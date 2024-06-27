'use server';
import * as z from 'zod';
import { db } from '@/lib/prisma';
import { addCommentSchema } from '@/types/types';
import { revalidatePath } from 'next/cache';

export const addComment = async (formData: FormData) => {
	const profileId = formData.get('profileId');
	const userId = formData.get('userId');
	const content = formData.get('content');

	// await db.comment.create({
	// 	data: {
	// 		profileId: profileId as string,
	// 		userId: userId as string,
	// 		content: content as string,
	// 	},
	// });
	const newComment = await db.comment.create({
		data: {
            profileId: profileId as string,
            userId: userId as string,
            content: content as string,
        },
		include: {
			user: true,
		}
	})

	revalidatePath(`/profile/${profileId}`); // profile check for data change and reloads

	return {
		success: true,
		comment: {
			...newComment,
			name: newComment.user.name,
			image: newComment.user.image,
		}
	};
};
