import Feeds from '@/components/profile/Feeds';
import ProfileCard from '@/components/profile/ProfileCard';
import Showcase from '@/components/profile/Showcase';
import { getUserById } from '@/model/user';
import { redirect } from 'next/navigation';
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
				<Feeds></Feeds>
			</div>
		</div>
	);
};

export default Profile;
