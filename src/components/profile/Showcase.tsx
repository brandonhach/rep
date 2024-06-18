'use client';
import React, { useState } from 'react';
import Moodboard from './ui/Showcase/Moodboard';
import Posts from './ui/Showcase/Posts';
import Affiliation from './ui/Showcase/Affiliation';
import { TbMoodSmileFilled } from 'react-icons/tb';
import { FaHandshake } from 'react-icons/fa';

import { FaSignsPost } from 'react-icons/fa6';

const Showcase = ({ params, affiliations, moodboards, tradePosts }: any) => {
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
					<span className='pr-1'>
						<TbMoodSmileFilled className='text-2xl' />
					</span>
					Moodboard
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'affiliation' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('affiliation')}>
					<span className='pr-1'>
						<FaHandshake className='text-2xl' />
					</span>
					Affiliation
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'posts' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('posts')}>
					{' '}
					<span className='pr-1'>
						<FaSignsPost className='text-xl' />
					</span>
					TradePosts
				</a>
			</div>
			<div className='w-[69rem] h-[23rem] p-4'>
				{activeTab === 'moodboard' && <Moodboard params={params} moodboards={moodboards}></Moodboard>}
				{activeTab === 'affiliation' && <Affiliation params={params} affiliations={affiliations}></Affiliation>}
				{activeTab === 'posts' && <Posts params={params} tradePosts={tradePosts}></Posts>}
			</div>
		</div>
	);
};

export default Showcase;
