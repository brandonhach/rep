import { Inter } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function ProfileLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='flex flex-col h-screen w-screen'>
					<Navbar />
					<main className='flex flex-grow'>{children}</main>
				</div>
			</body>
		</html>
	);
}
