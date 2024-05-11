'use client';
import React from 'react';
import { db } from '@/lib/prisma';
import Hero from '@/components/home/Hero';
import { AuroraBackground } from '@/components/home/ui/Hero/AuroraBG';
import CTA from '@/components/home/CTA';
import Navbar from '@/components/ui/Navbar';
import { usePathname } from 'next/navigation';

const Home = () => {
	const pathname = usePathname();
	const isRootPath = pathname === '/';
	return (
		<div className=''>
			<AuroraBackground>
				<Navbar></Navbar>
				<Hero></Hero>
			</AuroraBackground>
			<CTA></CTA>
		</div>
	);
};

export default Home;
