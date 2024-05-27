'use client';
import { PostsConfig } from '@/config/site-config';
import Image from 'next/image';
import React from 'react';

import { DirectionAwareHover } from '@/components/ui/DirectionAwareHover';

const Posts = () => {
	return (
		<div className='w-full h-full overflow-auto'>
			<div className='w-full h-full grid grid-cols-2 auto-rows-[328px] overflow-auto'>
				{PostsConfig.posts.map((post, index) => {
					return (
						<div key={index} className='col-span-1 m-4 rounded-xl relative overflow-hidden'>
							{' '}
							<DirectionAwareHover imageUrl={`${post.image}`}>
								<p className='font-bold text-2xl'>{post.title}</p>
								<p className='font-normal text-md'>
									Status: <span className='text-bold'>{post.postType}</span>
								</p>
								<p className='font-normal text-sm'>
									{post.price} / {post.description}
								</p>
							</DirectionAwareHover>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Posts;
