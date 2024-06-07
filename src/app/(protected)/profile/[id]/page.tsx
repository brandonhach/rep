import Feeds from '@/components/profile/Feeds';
import ProfileCard from '@/components/profile/ProfileCard';
import Showcase from '@/components/profile/Showcase';
import { db } from '@/lib/prisma';
import { getUserById } from '@/model/user';
import { redirect } from 'next/navigation';

async function getComments(profileId: string) {
	const comments = await db.comment.findMany({
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

	return comments;
}

async function getTradePosts(profileId: string){
	const tradePosts = await db.tradePost.findMany({
		where: {
			profileId: profileId,
		},
		select: {
			title: true,
			image: true,
			description: true,
			price: true,
			postType: true,
		},
	});

	return tradePosts;
}
const Profile = async ({ params }: any) => {
	// Profile page for example is a server component
	const profile = await getUserById(params.id);
	if (!profile) {
		redirect('/dashboard');
	}

	const comments = await getComments(params.id);

	const tradePosts = await getTradePosts(params.id);

	return (
		<div className='w-full h-full grid grid-cols-3 grid-rows-2'>
			<div className='row-span-2 p-4'>
				<ProfileCard profile={profile}></ProfileCard>
			</div>
			<div className='col-span-2 row-span-1 p-4'>
				<Showcase params={ params } tradePosts={ tradePosts }></Showcase>
			</div>
			<div className='col-span-2 row-span-1 p-4'>
				{/*<Feeds params={params} comments={comments}></Feeds>*/}
			</div>
		</div>
	);
};

export default Profile;
