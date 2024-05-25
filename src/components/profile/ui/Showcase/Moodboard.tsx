import React from 'react';
import { MoodboardConfig } from '@/config/site-config';
import Image from 'next/image';

const Moodboard = () => {
	return (
		<div className='w-full h-full grid grid-cols-4 grid-rows-1 '>
			{MoodboardConfig.images.map((item, index) => {
				return (
					<div key={index} className='col-span-1 m-4 rounded-xl relative overflow-hidden'>
						<Image className='object-cover rounded-t-xl' src={`${item.image}`} alt='' fill />
					</div>
				);
			})}
		</div>
	);
};

export default Moodboard;
