import { db } from '@/lib/prisma';

export const getUserByEmail = async (email: string) => {
	try {
		const user = await db.user.findUnique({ where: { email } });
		return user;
	} catch (error) {
		return null;
	}
};
