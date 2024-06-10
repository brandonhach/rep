import React from 'react';
import { MoodboardConfig } from '@/config/site-config';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { TMoodboard } from '@/types/types';
import { addMoodboard } from '@/actions/moodboards/add-moodboards';


const Moodboard = ({ params, moodboards }: any) => {
	const session = useSession();
	return (
		<div className='w-full h-full overflow-auto'>
			<div className='w-full h-full grid grid-cols-4 auto-rows-[328px] overflow-auto'>
			{moodboards.length === 0 ? (
					<div className='w-full h-full flex flex-row items-center justify-start'>
						<h1 className='text-4xl font-bold'>No Moodboards.</h1>
					</div>
				) : (
				moodboards.map((moodboard: TMoodboard) => (
						<div key={moodboard.id} className='col-span-1 m-4 rounded-xl relative overflow-hidden'>
							<Image className='object-cover rounded-t-xl' src={`${moodboard.moodboardImage}`} alt='' fill />
						</div>
				))
				)}
			</div>
		</div>
	);
};

export default Moodboard;
