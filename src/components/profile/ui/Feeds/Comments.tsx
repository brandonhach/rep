import Image from 'next/image';
import React from 'react';
import { MdOutlineAddReaction } from 'react-icons/md';
import { CommentsConfig } from '@/config/site-config';

const Comments = () => {
	return (
		<div className='w-full h-full overflow-auto'>
			<div className='w-full h-full grid grid-cols-1 auto-rows-max overflow-auto'>
				{CommentsConfig.comments.map((comment, index) => (
					<div
						key={index}
						className='col-span-1 m-2 rounded-xl relative overflow-hidden py-4 pb-6 hover:bg-base-200'>
						<div className='flex flex-row justify-start items-center w-full p-2'>
							<div className='avatar'>
								<div className='rounded-full w-14 ring ring-black ring-offset-black ring-offset-1'>
									<Image
										src={comment.image}
										height={48}
										width={48}
										alt='avatar'
										className='rounded-full'
									/>
								</div>
							</div>
							<div className='flex flex-col pl-4'>
								<h1 className='text-lg font-semibold'>{comment.name}</h1>
								<p className='text-sm text-gray-500'>{comment.datetime}</p>
							</div>
						</div>
						<div className='w-full h-auto px-4 flex flex-row items-start justify-between'>
							<div className='w-2/3 h-auto'>
								<p className='whitespace-pre-line w-full'>{comment.comment}</p>
							</div>
							<div className='flex flex-row gap-2 items-end justify-start h-full'>
								<div className='flex flex-row gap-1 size-full'>
									{comment.emotes.map((emote, emoteIndex) => (
										<span key={emoteIndex} className='text-xl'>
											{emote}
										</span>
									))}
									<MdOutlineAddReaction className='text-2xl cursor-pointer' />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Comments;
