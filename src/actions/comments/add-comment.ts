'use server';
import * as z from 'zod';
import { db } from '@/lib/prisma';
import { addCommentSchema } from '@/types/types';

export const addComment = async (formData: FormData) => {
	const profileId = formData.get('profileId');
	const userId = formData.get('userId');
	const content = formData.get('content');

	await db.comment.create({
		data: {
			profileId: profileId as string,
			userId: userId as string,
			content: content as string,
		},
	});

	return {
		success: true,
	};
};
