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
			user: true, //Include user related data to fetch user information associated with new comment
		}
	})

	revalidatePath(`/profile/${profileId}`); // profile check for data change and reloads

	{/*Includes also newly created comment with user-related data: name & image */}
	{/* - newComment object propertires spread into comment object.
	    - Name and image property of newComment object assigned to comment name and image
	*/}
	return {
		success: true,
		comment: {
			...newComment,
			name: newComment.user.name,
			image: newComment.user.image,
		}
	};
};
