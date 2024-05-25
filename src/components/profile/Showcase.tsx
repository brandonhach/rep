'use client';
import React, { useState } from 'react';
import Moodboard from './ui/Showcase/Moodboard';
import Achievements from './ui/Showcase/Achievements';
import Posts from './ui/Showcase/Posts';

const Showcase = () => {
	const [activeTab, setActiveTab] = useState('moodboard');

	const handleTabClick = (tab: React.SetStateAction<string>) => {
		setActiveTab(tab);
	};
	return (
		<div className='w-full h-full overflow-hidden'>
			<div role='tablist' className='tabs tabs-lifted'>
				<a
					role='tab'
					className={`tab ${activeTab === 'moodboard' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('moodboard')}>
					Moodboard
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'achievements' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('achievements')}>
					Achievements
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'posts' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('posts')}>
					Posts
				</a>
			</div>
			<div className='w-full h-full p-4'>
				{activeTab === 'moodboard' && <Moodboard></Moodboard>}
				{activeTab === 'achievements' && <Achievements></Achievements>}
				{activeTab === 'posts' && <Posts></Posts>}
			</div>
		</div>
	);
};

export default Showcase;
