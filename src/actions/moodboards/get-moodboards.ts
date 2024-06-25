'use server'

import { db } from '@/lib/prisma';

export const getMoodboards = async (profileId: string, offset: number, limit: number)=> {
    const moodboards = await db.moodboard.findMany({
        where: {
            profileId: profileId,
        },
        skip: offset,
        take: limit,
    });

    const modifiedMoodboards = moodboards.map((moodboard) => ({
        ...moodboard,
        user: undefined,
    }));

    return modifiedMoodboards
}