'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HeroConfig } from '@/config/site-config';
import { HeroHighlight, Highlight } from './ui/Hero/HeroHighlight';
import { InfiniteMovingCards } from './ui/Hero/InfiniteCards';
import { FancySearchBar } from '../ui/FancySearchBar';

const Hero = () => {
	const placeholders = [
		"What's the first rule of Fight Club?",
		'Who is Tyler Durden?',
		'Where is Andrew Laeddis Hiding?',
		'Write a Javascript method to reverse a string',
		'How to assemble your own PC?',
	];
	const testimonials = [
		{
			quote: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
			name: 'Charles Dickens',
			title: 'A Tale of Two Cities',
		},
		{
			quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
			name: 'William Shakespeare',
			title: 'Hamlet',
		},
		{
			quote: 'All that we see or seem is but a dream within a dream.',
			name: 'Edgar Allan Poe',
			title: 'A Dream Within a Dream',
		},
		{
			quote: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
			name: 'Jane Austen',
			title: 'Pride and Prejudice',
		},
		{
			quote: 'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
			name: 'Herman Melville',
			title: 'Moby-Dick',
		},
	];

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('submitted');
	};
	return (
		<div className='w-screen h-fit'>
			<div className='flex flex-col items-center justify-center'>
				<div className='flex flex-col gap-20 pb-44 pt-32'>
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
							className='text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug text-center mx-auto '>
							The modern trust platform for <br />
							<Highlight className='text-black dark:text-white'>the internet.</Highlight>
						</motion.h1>
					</HeroHighlight>{' '}
					<FancySearchBar placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
				</div>

				<InfiniteMovingCards items={testimonials} direction='right' speed='slow' />
			</div>
		</div>
	);
};

export default Hero;
