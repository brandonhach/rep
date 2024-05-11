import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.upsert({
		where: { email: 'test@test.com' },
		update: {},
		create: {
			username: 'dookie',
			email: 'test@test.com',
			password: '$2y$12$GBfcgD6XwaMferSOdYGiduw3Awuo95QAPhxFE0oNJ.Ds8qj3pzEZy',
		},
	});
	console.log(`User created or updated: ${user.id}`);
}

main()
	.then(() => {
		console.log('Seeding finished.');
		prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error('Error during seeding:', e);
		await prisma.$disconnect();
		process.exit(1);
	});
