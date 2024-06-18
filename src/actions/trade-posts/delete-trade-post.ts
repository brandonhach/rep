'use server';
import * as z from 'zod';
import { db } from '@/lib/prisma';
import { deleteTradePostSchema } from '@/types/types';
import { revalidatePath } from 'next/cache';

export const deleteTradePost = async (formData: FormData) => {
    const id = formData.get('id')
    const profileId = formData.get('profileId');

    await db.tradePost.delete({
        where: {
            id: id as string,
        },
    });

    revalidatePath(`/profile/${profileId}`); // profile check for data change and reloads

    return {
        success: true,
    };
};