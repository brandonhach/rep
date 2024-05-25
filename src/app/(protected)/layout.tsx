import { Inter } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function ProtectedLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={inter.className}>
			<div className='flex flex-col h-screen'>
				<Navbar />
				{children}
			</div>
		</div>
	);
}
