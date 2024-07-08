import Feeds from '@/components/profile/Feeds';
import ProfileCard from '@/components/profile/ProfileCard';
import Showcase from '@/components/profile/Showcase';
import { db } from '@/lib/prisma';
import { getUserById } from '@/model/user';
import { redirect } from 'next/navigation';
import { getComments } from '@/actions/comments/get-comments';
import { getMoodboards } from "@/actions/moodboards/get-moodboards";
import { checkAndCreateProfile } from '@/actions/profile-card/check-profilecard';
const INITIAL_NUMBER_OF_COMMENTS = 4;
const INITIAL_NUMBER_OF_MOODBOARDS = 8;
// async function getComments(profileId: string, offset: number, limit: number) {
// 	const comments = await db.comment.findMany({
// 		where: {
// 			profileId: profileId,
// 		},
// 		include: {
// 			user: {
// 				select: {
// 					name: true,
// 					image: true,
// 				},
// 			},
// 		},
// 		skip: offset,
// 		take: limit,
// 	});

//     const modifiedComments = comments.map((comment) => ({
//         ...comment,
//         name: comment.user?.name,
//         image: comment.user?.image,
//         user: undefined,
//     }));

//     return modifiedComments;
// }

async function getTradePosts(profileId: string) {
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

async function getAffiliations(profileId: string) {
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

async function getProfileInfo(userId: string) {
	await checkAndCreateProfile(userId);
	const profile = await db.profile.findUnique({
		where: {
			userId: userId
		},
	});

	const profileInfo = {
		...profile,
		user: undefined
	}

	return profileInfo;

}

// Moved getMoodboards into its own action @/actions/moodboards/get-moodboards

const Profile = async ({ params }: any) => {
	// Profile page for example is a server component
	const profile = await getUserById(params.id);
	if (!profile) {
		redirect('/dashboard');
	}
	const comments = await getComments(params.id, 0, INITIAL_NUMBER_OF_COMMENTS);
	console.log(profile);
	const tradePosts = await getTradePosts(params.id);

	const affiliations = await getAffiliations(params.id);

	const moodboards = await getMoodboards(params.id, 0, INITIAL_NUMBER_OF_MOODBOARDS);

	const profileInfo = await getProfileInfo(params.id);

	return (
		<div className='w-full h-full grid grid-cols-3 grid-rows-2'>
			<div className='row-span-2 p-4'>
				<ProfileCard profile={profile} profileInfo={profileInfo}></ProfileCard>
			</div>
			<div className='col-span-2 row-span-1 p-4'>
				<Showcase params={params} affiliations={affiliations} moodboards={moodboards} tradePosts={tradePosts}></Showcase>
			</div>
			<div className='col-span-2 row-span-1 p-4'>
				<Feeds params={params} comments={comments}></Feeds>
			</div>
		</div>
	);
};

export default Profile;
