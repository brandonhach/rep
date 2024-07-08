'use server';

import { db } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const checkAndCreateProfile = async (userId: string) => {
    // Check if a profile exists for the user
    const existingProfile = await db.profile.findUnique({
        where: {
            userId: userId
        }
    });
    if (!existingProfile) {
        const newProfile = await db.profile.create({
            data: {
                userId: userId,
                // You can set default values for other fields here
                description: "New user profile",
                backgroundImage: 'https://images.unsplash.com/photo-1582414004129-a955c6087f5e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                contacts: 0,
                followers: 0,
                likes: 0,
                dislikes: 0
            }
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