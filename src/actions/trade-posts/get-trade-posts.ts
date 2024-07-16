'use server'

import {db} from "@/lib/prisma";

export const getTradePosts = async (profileId: string) => {
    const tradePosts = await db.tradePost.findMany({
        where: {
            profileId: profileId,
        },
    });

    return tradePosts.map((tradePost) => ({
        ...tradePost,
        user: undefined,
    }));
}