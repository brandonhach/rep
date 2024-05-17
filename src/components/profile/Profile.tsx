'use client';
import React from 'react';

const ProfileComponent = ({ profile }: any) => {
	return (
		<div>
			<p>Email: {profile.email}</p>
			<p>Username: {profile.username}</p>
		</div>
	);
};

export default ProfileComponent;
