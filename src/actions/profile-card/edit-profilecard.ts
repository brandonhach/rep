'use server'

import { db } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const editProfileData = async (formData: FormData) => {
    const id = formData.get('id')
    const description = formData.get('description');
    const backgroundImage = formData.get('backgroundImage');

}