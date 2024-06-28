'use server';

import { db } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const addMoodboard = async (formData: { moodboardImage: string; profileId: any; userId: any }) => {
    const profileId = formData.profileId;
	const userId = formData.userId;
	const moodboardImage = formData.moodboardImage;

    const addedMood = await db.moodboard.create({
        data: {
            profileId: profileId as string,
            userId: userId as string,
            moodboardImage: moodboardImage as string,
        },
    });

    revalidatePath(`/profile/${profileId}`);

    return addedMood;
}