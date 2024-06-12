'use server';
import * as z from 'zod';
import { db } from '@/lib/prisma';
import { addTradePostSchema } from '@/types/types';
import { revalidatePath } from 'next/cache';
import {undefined} from "zod";

export const editTradePost = async (formData: FormData) => {
    const profileId = formData.get('profileId');
    const userId = formData.get('userId');
    const content = formData.get('content');

    await db.tradePost.update({
        data: {
            profileId: profileId as string,
            userId: userId as string,
            title: title as string,
            image: image as string,
            description: description as string,
        }
    });

    revalidatePath(`/profile/${profileId}`); // profile check for data change and reloads

    return {
        success: true,
    };
};