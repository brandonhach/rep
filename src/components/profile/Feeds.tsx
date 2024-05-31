'use client';
import React, { useState } from 'react';
import Rep from './ui/Feeds/Rep';
import Comments from './ui/Feeds/Comments';
import Follows from './ui/Feeds/Follows';
import Contacts from './ui/Feeds/Contacts';
import { GiLaurelsTrophy } from 'react-icons/gi';
import { BiSolidCommentDetail } from 'react-icons/bi';
import { RiContactsBook3Fill } from 'react-icons/ri';
import { RiUserFollowFill } from 'react-icons/ri';

const Feeds = ({ params }: any) => {
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
					{' '}
					<span className='pr-1'>
						<GiLaurelsTrophy className='text-2xl' />
					</span>
					Rep
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'comments' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('comments')}>
					{' '}
					<span className='pr-1'>
						<BiSolidCommentDetail className='text-2xl' />
					</span>
					Comments
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'follows' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('follows')}>
					{' '}
					<span className='pr-1'>
						<RiUserFollowFill className='text-2xl' />
					</span>
					Follows
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'contacts' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('contacts')}>
					{' '}
					<span className='pr-1'>
						<RiContactsBook3Fill className='text-2xl' />
					</span>
					Contacts
				</a>
			</div>
			<div className='w-[69rem] h-[23rem] p-4'>
				{activeTab === 'rep' && <Rep></Rep>}
				{activeTab === 'comments' && <Comments params={params}></Comments>}
				{activeTab === 'follows' && <Follows></Follows>}
				{activeTab === 'contacts' && <Contacts></Contacts>}
			</div>
		</div>
	);
};

export default Feeds;
