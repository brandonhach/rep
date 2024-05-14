'use client';

import { useParams } from 'next/navigation';

const Profile = () => {
	const params = useParams();
	return <div>Profile {params.id}</div>;
};

export default Profile;
