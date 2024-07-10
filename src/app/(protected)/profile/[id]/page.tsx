import Feeds from '@/components/profile/Feeds';
import ProfileCard from '@/components/profile/ProfileCard';
import Showcase from '@/components/profile/Showcase';
import { getUserById } from '@/model/user';
import { redirect } from 'next/navigation';
import { getAffiliations, getComments, getMoodboards, getProfileInfo, getTradePosts } from '@/lib/profile-data';

const INITIAL_NUMBER_OF_COMMENTS = 4;
const INITIAL_NUMBER_OF_MOODBOARDS = 8;

const Profile = async ({ params }: any) => {
	// Profile page for example is a server component
	const profile = await getUserById(params.id);
	if (!profile) {
		redirect('/dashboard');
	}
	const comments = await getComments(params.id, 0, INITIAL_NUMBER_OF_COMMENTS);
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
				<Showcase
					params={params}
					affiliations={affiliations}
					moodboards={moodboards}
					tradePosts={tradePosts}></Showcase>
			</div>
			<div className='col-span-2 row-span-1 p-4'>
				<Feeds params={params} comments={comments}></Feeds>
			</div>
		</div>
	);
};

export default Profile;
