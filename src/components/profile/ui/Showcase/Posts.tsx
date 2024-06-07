'use client';
import
{ PostsConfig } from '@/config/site-config';
import Image from 'next/image';
import React from 'react';
import { DirectionAwareHover } from '@/components/ui/DirectionAwareHover';
import {addTradePost} from "@/actions/trade-posts/add-trade-post";
import {useSession} from "next-auth/react";

const Posts = ({ params, tradePosts }: any) => {
	const session = useSession();
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
								<button
									className='btn rounded-xl'
									onClick={() => (document.getElementById('addTradePost_modal') as HTMLDialogElement).showModal()}>
									edit
								</button>
							</DirectionAwareHover>
						</div>
					);
				})}
			</div>
			<div className='w-full z-50 h-1/6 flex flex-row items-end justify-between px-3'>
				<dialog id='addTradePost_modal' className='modal'>
					<div className='modal-box rounded-xl'>
						<form action={addTradePost} className='px-2 flex flex-col gap-4 items-end size-full'>
							<label className='form-control size-full'>
								<input type='hidden' name='profileId' value={params.id}/>
								<input type='hidden' name='userId' value={session.data?.user.id!}/>
								<input name='title' />
								<input name='image' />
								<textarea
									className='textarea textarea-bordered w-full h-24 resize-none rounded-xl whitespace-pre-line'
									name='description'
									placeholder='Provide a discription for your post...'></textarea>
								<input name='price' />
								<div className="form-control">
									<label className="label cursor-pointer">
										<span className="label-text">Selling</span>
										<input type="radio" name="radio-10" className="radio checked:bg-green-500"
											   checked/>
									</label>
								</div>
								<div className="form-control">
									<label className="label cursor-pointer">
										<span className="label-text">Buying</span>
										<input type="radio" name="radio-10" className="radio checked:bg-red-500"
											   checked/>
									</label>
								</div>
							</label>
							<button
								className='btn btn-outline rounded-xl btn-sm'
								type='submit'
								onClick={() => {
									(document.getElementById('addTradePost_modal') as HTMLDialogElement).close();
									// mutate(url);
								}}>
								Submit
							</button>
						</form>
					</div>
					<form method='dialog' className='modal-backdrop'>
						<button>close</button>
					</form>
				</dialog>
				<div className='join'>
					<button className='join-item btn btn-sm btn-active'>1</button>
					<button className='join-item btn btn-sm'>2</button>
					<button className='join-item btn btn-sm'>3</button>
					<button className='join-item btn btn-sm'>4</button>
				</div>
			</div>
		</div>
	);
};

export default Posts;
