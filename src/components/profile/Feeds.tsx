'use client';
import React, { useState } from 'react';
import Rep from './ui/Feeds/Rep';
import Comments from './ui/Feeds/Comments';
import Follows from './ui/Feeds/Follows';
import Contacts from './ui/Feeds/Contacts';

const Feeds = () => {
	const [activeTab, setActiveTab] = useState('rep');

	const handleTabClick = (tab: React.SetStateAction<string>) => {
		setActiveTab(tab);
	};
	return (
		<div className='w-full h-full overflow-hidden'>
			<div role='tablist' className='tabs tabs-lifted'>
				<a
					role='tab'
					className={`tab ${activeTab === 'rep' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('rep')}>
					Rep
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'comments' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('comments')}>
					Comments
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'follows' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('follows')}>
					Follows
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'contacts' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('contacts')}>
					Contacts
				</a>
			</div>
			<div className='w-full h-[21rem] p-4'>
				{activeTab === 'rep' && <Rep></Rep>}
				{activeTab === 'comments' && <Comments></Comments>}
				{activeTab === 'follows' && <Follows></Follows>}
				{activeTab === 'contacts' && <Contacts></Contacts>}
			</div>
		</div>
	);
};

export default Feeds;
