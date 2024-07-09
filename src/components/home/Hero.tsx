'use client';
import { motion } from 'framer-motion';
import { HeroConfig } from '@/config/site-config';
import { HeroHighlight, Highlight } from './ui/Hero/HeroHighlight';
import { FancySearchBar } from '../ui/FancySearchBar';
import { globeConfig, sampleArcs } from '@/config/ui/globe/globeDependency';
import dynamic from 'next/dynamic';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Hero = () => {
	const World = dynamic(() => import('../ui/Globe').then((m) => m.World), {
		ssr: false,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className='w-screen h-[87vh] relative flex flex-col items-center justify-center'>
			<div className='flex flex-col w-full h-fit justify-center items-center '>
				{/* Globe */}
				<div className='flex flex-row items-center justify-center w-full h-[50rem] overflow-hidden '>
					<World data={sampleArcs} globeConfig={globeConfig} />
				</div>
			</div>
			<div className='absolute flex flex-col gap-10 top-30'>
				{/* Heading */}
				<HeroHighlight>
					<motion.h1
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: [20, -5, 0],
						}}
						transition={{
							duration: 0.5,
							ease: [0.4, 0.0, 0.2, 1],
						}}
						className='text-2xl px-4 md:text-4xl lg:text-5xl text-neutral-700 dark:text-white leading-relaxed lg:leading-snug text-center mx-auto'>
						The modern trust platform for <br />
						<Highlight className='text-black dark:text-white'>the internet.</Highlight>
					</motion.h1>
				</HeroHighlight>
				{/* Search bar */}
				<FancySearchBar placeholders={HeroConfig.placeholders} onChange={handleChange} onSubmit={onSubmit} />
			</div>
			<div className='w-full h-fit flex flex-row items-center justify-center bg-neutral-900/50'>
				<Link href={'/learn'} className='flex flex-row font-light text-sm hover:underline items-center gap-1'>
					<AiOutlineInfoCircle />
					<p>Learn more</p>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
