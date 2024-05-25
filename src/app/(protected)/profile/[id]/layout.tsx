import { Inter } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function ProfileLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex flex-col flex-grow h-full'>
			<main className='flex-grow'>{children}</main>
		</div>
	);
}
