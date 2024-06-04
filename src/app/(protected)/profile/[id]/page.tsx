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

	const modifiedComments = comments.map((comment) => ({
		...comment,
		name: comment.user?.name,
		image: comment.user?.image,
		user: undefined,
	}));

	return modifiedComments;
}

import { db } from '@/lib/prisma';

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

const Profile = async ({ params }: any) => {
	// Profile page for example is a server component
	const profile = await getUserById(params.id);
	if (!profile) {
		redirect('/dashboard');
	}

	const comments = await getComments(params.id);

	const affiliations = await getAffiliations(params.id);

	return (
		<div className='w-full h-full grid grid-cols-3 grid-rows-2'>
			<div className='row-span-2 p-4'>
				<ProfileCard profile={profile}></ProfileCard>
			</div>
			<div className='col-span-2 row-span-1 p-4'>
				<Showcase params={params} affiliations={affiliations}></Showcase>
			</div>
			<div className='col-span-2 row-span-1 p-4'>
				<Feeds params={params} comments={comments}></Feeds>
			</div>
		</div>
	);
};

export default Profile;
