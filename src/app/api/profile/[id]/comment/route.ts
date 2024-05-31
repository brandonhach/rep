import { NextResponse } from 'next/server';
import { db } from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
	try {
		const id = params.id;

		if (!id) {
			return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
		}

		const comments = await db.comment.findMany({
			where: {
				profileId: id,
			},
			include: {
				user: {
					select: {
						name: true,
						image: true,
					},
				},
			},
		});

		const modifiedComments = comments.map((comment) => ({
			...comment,
			name: comment.user?.name,
			image: comment.user?.image,
			user: undefined,
		}));

		return NextResponse.json(modifiedComments);
	} catch (error) {
		console.error('Failed to fetch comments:', error);
		return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
	}
}
