'use server';

import { db } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const checkAndCreateProfile = async (userId: string) => {
	// Check if a profile exists for the user
	const existingProfile = await db.profile.findUnique({
		where: {
			userId: userId,
		},
	});
	if (!existingProfile) {
		const newProfile = await db.profile.create({
			data: {
				userId: userId,
			},
		});

		revalidatePath(`/profile/${newProfile.id}`);

		return {
			//success: true,
			profile: newProfile,
			//message: "New profile created"
		};
	}

	return {
		//success: true,
		profile: existingProfile,
		//message: "Existing profile found"
	};
};
