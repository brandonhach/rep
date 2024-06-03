'use client';
import { useState } from 'react';
import Appearance from './ui/Appearance';
import BasicInfo from './ui/BasicInfo';
import Billing from './ui/Billing';
import News from './ui/News';
import Notification from './ui/Notification';
import Security from './ui/Security';

const InnerNav = () => {
	const [activeTab, setActiveTab] = useState('basic-info');

	const handleTabClick = (tab: React.SetStateAction<string>) => {
		setActiveTab(tab);
	};
	return (
		<div className='size-full'>
			<div className='border-b-[1px] pb-4 border-base-300'>
				<h1 className='text-4xl font-semibold'>Settings</h1>
			</div>

			<div role='tablist' className='tabs tabs-bordered pt-2 w-full'>
				<a
					role='tab'
					className={`tab ${activeTab === 'basic-info' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('basic-info')}>
					Basic Info
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'billing' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('billing')}>
					Plans & Billing
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'appearance' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('appearance')}>
					Appearance
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'security' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('security')}>
					Security
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'notification' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('notification')}>
					Notification
				</a>
				<a
					role='tab'
					className={`tab ${activeTab === 'news' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('news')}>
					What&apos;s New
				</a>
			</div>
			<div className='w-[69rem] h-[23rem] p-4'>
				{activeTab === 'basic-info' && <BasicInfo></BasicInfo>}
				{activeTab === 'billing' && <Billing></Billing>}
				{activeTab === 'appearance' && <Appearance></Appearance>}
				{activeTab === 'security' && <Security></Security>}
				{activeTab === 'notification' && <Notification></Notification>}
				{activeTab === 'news' && <News></News>}
			</div>
		</div>
	);
};

export default InnerNav;
