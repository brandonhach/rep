import NextAuth, { type DefaultSession } from 'next-auth';
import { UserRole, username } from '@prisma/client';

export type ExtendedUser = DefaultSession['user'] & {
	role: UserRole;
	username: username;
};

declare module 'next-auth' {
	interface Session {
		user: ExtendedUser;
	}
}
