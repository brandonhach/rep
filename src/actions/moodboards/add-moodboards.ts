'use server';
import * as z from 'zod';
import { db } from '@/lib/prisma';
import { addMoodboardSchema } from '@/types/types';
import { revalidatePath } from 'next/cache';

export const addMoodboard = async(formData: FormData) => {
    const profileId = formData.get('profileId');
	const userId = formData.get('userId');
	const moodboardImage = formData.get('moodboardImage');

    await db.moodboard.create({
        data: {
            profileId: profileId as string,
            userId: userId as string,
            moodboardImage: moodboardImage as string,
        },
    });

    revalidatePath(`/profile/${profileId}`);

    return {
        success: true,
    };
}