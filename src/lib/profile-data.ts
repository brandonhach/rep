import { db } from '@/lib/prisma';
import { checkAndCreateProfile } from '@/actions/profile-card/check-profilecard';

export async function getTradePosts(profileId: string) {
	const tradePosts = await db.tradePost.findMany({
		where: {
			profileId: profileId,
		},
	});

	const modifiedTradePosts = tradePosts.map((tradePost) => ({
		...tradePost,
		user: undefined,
	}));

	return modifiedTradePosts;
}

export async function getAffiliations(profileId: string) {
	const affiliations = await db.affiliation.findMany({
		where: {
			profileId: profileId,
		},
	});

	const modifiedAffiliations = affiliations.map((affiliation) => ({
		...affiliation,
		user: undefined,
	}));

	return modifiedAffiliations;
}

export async function getProfileInfo(userId: string) {
	await checkAndCreateProfile(userId);
	const profile = await db.profile.findUnique({
		where: {
			userId: userId,
		},
	});

	const profileInfo = {
		...profile,
		user: undefined,
	};

	return profileInfo;
}

export async function getComments(profileId: string, offset: number, limit: number) {
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
}

export async function getMoodboards(profileId: string, offset: number, limit: number) {
	const moodboards = await db.moodboard.findMany({
		where: {
			profileId: profileId,
		},
		skip: offset,
		take: limit,
		orderBy: {
			id: 'desc',
		},
	});

	return moodboards.map((moodboard) => ({
		...moodboard,
		user: undefined,
	}));
}

export async function getReps(profileId: string) {
	const reps = await db.rep.findMany({
		where: {
			profileId: profileId,
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

	const modifiedReps = reps.map((rep) => ({
		...rep,
	}));

	return modifiedReps;
}
