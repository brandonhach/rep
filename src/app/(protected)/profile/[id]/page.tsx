import Feeds from '@/components/profile/Feeds';
import ProfileCard from '@/components/profile/ProfileCard';
import Showcase from '@/components/profile/Showcase';
import { getUserById } from '@/model/user';
import { redirect } from 'next/navigation';

const Profile = async ({ params }: any) => {
	// Profile page for example is a server component
	const profile = await getUserById(params.id);
	if (!profile) {
		redirect('/dashboard');
	}

	return (
		<div className='grid grid-cols-3 grid-rows-2 w-full h-full'>
			<div className='row-span-2 p-4'>
				<ProfileCard profile={profile}></ProfileCard>
			</div>
			<div className='col-span-2 p-4'>
				<Showcase></Showcase>
			</div>
			<div className='col-span-2 p-4'>
				<Feeds></Feeds>
			</div>
		</div>
	);
};

export default Profile;
