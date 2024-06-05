'use server';
import * as z from 'zod';
import { db } from '@/lib/prisma';
import { addAffiliationSchema } from '@/types/types';
import { revalidatePath } from 'next/cache';

export const addAffiliation = async (formData: FormData) => {
    const profileId = formData.get('profileId');
    const userId = formData.get('userId');
    const affiliationTitle = formData.get('affiliationTitle');
    const affiliationRole = formData.get('affiliationRole');
    const platform = formData.get('platform');
    const platformImage = formData.get('platformImage');
    const platformURL = formData.get('platformURL');

    await db.affiliation.create({
        data: {
            profileId: profileId as string,
            userId: userId as string,
            affiliationTitle: affiliationTitle as string,
            affiliationRole: affiliationRole as string,
            platform: platform as string,
            platformImage: platformImage as string,
            platformURL: platformURL as string,
        },
    });

    revalidatePath(`/profile/${profileId}`);

    return {
        success: true,
    };
};