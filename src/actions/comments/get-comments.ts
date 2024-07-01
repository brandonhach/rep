'use server';
import { db } from '@/lib/prisma';
import { TComment } from '@/types/types';
import { revalidatePath } from 'next/cache';

export const getComments = async (profileId: string, offset: number, limit: number) => {
	const comments = await db.comment.findMany({
		where: {
			profileId: profileId,
		},
		orderBy: {
			createdAt: 'desc',
		},
		include: {
			user: {
				select: {
					name: true,
					image: true,
				},
			},
		},

		skip: offset,
		take: limit,
	});

	{
		/*
		- Copies existing properties of comment object with spread ... into a new object modifiedComments
		- modifiedComments then returns the new fetched comments from loadMoreComments function in Comments.tsx
	*/
	}
	const modifiedComments = comments.map((comment) => ({
		...comment,
		name: comment.user?.name || 'null',
		image:
			comment.user?.image ||
			'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		createdAt: comment.createdAt.toISOString(),
		updatedAt: comment.updatedAt.toISOString(),
		user: undefined,
	}));

	return modifiedComments;
};
