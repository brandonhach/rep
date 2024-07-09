'use server'

import { db } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const editProfileData = async (formData: FormData) => {
    const id = formData.get('id')
    const description = formData.get('description');
    const backgroundImage = formData.get('backgroundImage');


    await db.profile.update({
        where: {
            userId: id as string,
        },
        data: {

            description: description as string,
            backgroundImage: backgroundImage as string,
        }
    });

    revalidatePath(`/profile/${id}`); // profile check for data change and reloads

    return {
        success: true,
    };


}