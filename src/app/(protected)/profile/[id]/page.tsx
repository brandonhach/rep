import { getUserById } from '@/model/user';
import { redirect } from 'next/navigation';
import ProfileComponent from '@/components/profile/Profile';

const Profile = async ({ params }: any) => {
	// Profile page for example is a server component
	const profile = await getUserById(params.id);
	if (!profile) {
		redirect('/dashboard');
	}

	return (
		<div>
			{/*{params.id}*/}
			{/* Client component */}
			<ProfileComponent profile={profile}/>
		</div>
	);
};

export default Profile;
