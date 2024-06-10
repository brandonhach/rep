import React from 'react';
import { MoodboardConfig } from '@/config/site-config';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { TMoodboard } from '@/types/types';
import { addMoodboard } from '@/actions/moodboards/add-moodboards';


const Moodboard = ({ params, affiliations }: any) => {
	const session = useSession();
	return (
		<div className='w-full h-full overflow-auto'>
			<div className='w-full h-full grid grid-cols-4 auto-rows-[328px] overflow-auto'>
				{MoodboardConfig.images.map((item, index) => {
					return (
						<div key={index} className='col-span-1 m-4 rounded-xl relative overflow-hidden'>
							<Image className='object-cover rounded-t-xl' src={`${item.image}`} alt='' fill />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Moodboard;
