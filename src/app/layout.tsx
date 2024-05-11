import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';

import { usePathname } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
