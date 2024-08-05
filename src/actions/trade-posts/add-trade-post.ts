'use server';
import * as z from 'zod';
import { db } from '@/lib/prisma';
import { addTradePostSchema } from '@/types/types';
import { revalidatePath } from 'next/cache';

export const addTradePost = async (formData: { title: string; image: string; description: string; price: string;
    postType: string; profileId: any; userId: any }) => {
    const profileId = formData.profileId;
    const userId = formData.userId;
    const title = formData.title;
    const image = formData.image;
    const description = formData.description;
    const price = formData.price;
    const postType = formData.postType;

    await db.tradePost.create({
        data: {
            profileId: profileId as string,
            userId: userId as string,
            title: title as string,
            image: image as string,
            description: description as string,
            price: price as string,
            postType:postType as string,
        },
    });

    revalidatePath(`/profile/${profileId}`); // profile check for data change and reloads

    return {
        success: true,
    };
};
