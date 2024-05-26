'use client';
import React, { useState } from 'react';
import Moodboard from './ui/Showcase/Moodboard';
import Posts from './ui/Showcase/Posts';
import Affiliation from './ui/Showcase/Affiliation';

const Showcase = () => {
	const [activeTab, setActiveTab] = useState('moodboard');

	const handleTabClick = (tab: React.SetStateAction<string>) => {
		setActiveTab(tab);
	};
	return (
		<div className='w-full h-full'>
			<div role='tablist' className='tabs tabs-lifted'>
				<a
					role='tab'
					className={`tab ${activeTab === 'moodboard' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('moodboard')}>
					Moodboard
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'affiliation' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('affiliation')}>
					Affiliation
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'posts' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('posts')}>
					Posts
				</a>
			</div>
			<div className='w-full h-[23rem] p-4 '>
				{activeTab === 'moodboard' && <Moodboard></Moodboard>}
				{activeTab === 'affiliation' && <Affiliation></Affiliation>}
				{activeTab === 'posts' && <Posts></Posts>}
			</div>
		</div>
	);
};

export default Showcase;
