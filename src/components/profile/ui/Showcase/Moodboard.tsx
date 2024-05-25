import React from 'react';
import { MoodboardConfig } from '@/config/site-config';
import Image from 'next/image';

const Moodboard = () => {
	const gridLayout = 'col-span-1 m-4 rounded-xl relative overflow-hidden';
	return (
		<div className='w-full h-full grid grid-cols-4 grid-rows-1 '>
			<div className={`${gridLayout}`}>
				<Image className='object-cover rounded-t-xl' src={`${MoodboardConfig.pic1}`} alt='' fill />
			</div>
			<div className={`${gridLayout}`}>
				{' '}
				<Image className='object-cover rounded-t-xl' src={`${MoodboardConfig.pic2}`} alt='' fill />
			</div>
			<div className={`${gridLayout}`}>
				{' '}
				<Image className='object-cover rounded-t-xl' src={`${MoodboardConfig.pic3}`} alt='' fill />
			</div>
			<div className={`${gridLayout}`}>
				{' '}
				<Image className='object-cover rounded-t-xl' src={`${MoodboardConfig.pic4}`} alt='' fill />
			</div>
		</div>
	);
};

export default Moodboard;
