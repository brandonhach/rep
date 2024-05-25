import { Inter } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className='flex flex-col h-screen w-screen'>
				<Navbar />
				<main className='flex flex-grow'>{children}</main>
			</div>
		</>
	);
}
