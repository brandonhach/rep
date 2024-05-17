'use client';
import React from 'react';
import Hero from '@/components/home/Hero';
import { AuroraBackground } from '@/components/home/ui/Hero/AuroraBG';
import CTA from '@/components/home/CTA';
import Navbar from '@/components/ui/Navbar';

const Home = () => {
	return (
		<div>
			<AuroraBackground>
				<Navbar></Navbar>
				<Hero></Hero>
			</AuroraBackground>
			<CTA></CTA>
		</div>
	);
};

export default Home;
