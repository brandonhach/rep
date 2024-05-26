import { MoodboardConfig } from '@/config/site-config';
import Image from 'next/image';
import React from 'react';

const Comments = () => {
	return (
		<div className='w-full h-full overflow-auto'>
			<div className='w-full h-full grid grid-cols-1 auto-rows-[128px] overflow-auto'>
				{MoodboardConfig.images.map((item, index) => {
					return (
						<div
							key={index}
							className='col-span-1 m-4 rounded-xl relative overflow-hidden border border-white '>
							<div className='flex flex-row justify-start items-start'>
								<div className='avatar'>
									<div className='avatar rounded-full w-14'>
										<Image src={`${item.image}`} height={48} width={48} alt='avatar'></Image>
									</div>
								</div>
								<div>Name</div>
							</div>
							<div>Comment</div>
							<div>Reaction</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Comments;
