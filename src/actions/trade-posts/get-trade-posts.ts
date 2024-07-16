'use server'

import {db} from "@/lib/prisma";

export const getTradePosts = async (profileId: string, offset: number, limit: number) => {
    const tradePosts = await db.tradePost.findMany({
        where: {
            profileId: profileId,
        },
        skip: offset,
        take: limit,
        orderBy: {
            id: 'desc',
        }
    });

    return tradePosts.map((tradePost) => ({
        ...tradePost,
        user: undefined,
    }));
}