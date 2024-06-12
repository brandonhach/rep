'use client';
import
{ PostsConfig } from '@/config/site-config';
import Image from 'next/image';
import React from 'react';
import { DirectionAwareHover } from '@/components/ui/DirectionAwareHover';
import {useSession} from "next-auth/react";
import {MdAddBox, MdEditSquare} from "react-icons/md";
import {TTradePost} from "@/types/types";
import {addTradePost} from "@/actions/trade-posts/add-trade-post";


const Posts = ({ params, tradePosts }: any) => {
	const session = useSession();
	return (
		<div className='w-full h-full overflow-auto'>
			<button className="btn rounded-xl"
					onClick={() => (document.getElementById('addTradePost_modal') as HTMLDialogElement).showModal()}>
				<MdAddBox />
			</button>
			<div className='w-full h-full grid grid-cols-2 auto-rows-[328px] overflow-auto'>
				{tradePosts.map((tradePost: TTradePost) => {
					return (
						<div key={tradePost.id} className='col-span-1 m-4 rounded-xl relative overflow-hidden'>
							{' '}
							<DirectionAwareHover imageUrl={`${tradePost.image}`}>
								<p className='font-bold text-2xl'>{tradePost.title}</p>
								<p className='font-normal text-md'>
									Status: <span className='text-bold'>{tradePost.postType}</span>
								</p>
								<p className='font-normal text-sm'>
									{tradePost.price} / {tradePost.description}
								</p>
								<button className='btn rounded-xl absolute -top-2 -right-2'
										onClick={() => (document.getElementById('editTradePost_modal') as HTMLDialogElement).showModal()}>
									<MdEditSquare />
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
							<label className='form-control size-full gap-4'>
								Add a new post:
								<input type='hidden' name='profileId' value={params.id}/>
								<input type='hidden' name='userId' value={session.data?.user.id!}/>
								<label className="input input-bordered flex items-center gap-2 rounded-xl">
									Title:
									<input type="text" name='title' className="grow" placeholder="Daisy"/>
								</label>
								<label className="input input-bordered flex items-center gap-2 rounded-xl">
									Image:
									<input type="text" name='image' className="grow" placeholder="Url..."/>
								</label>
								<textarea
									className='textarea textarea-bordered w-full h-24 resize-none rounded-xl whitespace-pre-line'
									name='description'
									placeholder='Provide a discription for your post...'></textarea>
								<label className="input input-bordered flex items-center gap-2 rounded-xl">
									Price:
									<input type="text" name='price' className="grow" placeholder="daisy@site.com"/>
								</label>
								<label className="input input-bordered flex items-center gap-2 rounded-xl">
									Post Type:
									<input type="text" name='postType' className="grow" placeholder="type"/>
								</label>
								{/*<div className='flex flex-row items-center justify-evenly'>*/}
								{/*	<div className="form-control">*/}
								{/*		<label className="label cursor-pointer gap-4">*/}
								{/*			<span className="label-text">Selling</span>*/}
								{/*			<input type="radio" name="radio-10"*/}
								{/*				   className="radio checked:bg-green-500"*/}
								{/*				   checked/>*/}
								{/*		</label>*/}
								{/*	</div>*/}
								{/*	<div className="form-control">*/}
								{/*		<label className="label cursor-pointer gap-4">*/}
								{/*			<span className="label-text">Buying</span>*/}
								{/*			<input type="radio" name="radio-10" className="radio checked:bg-red-500"*/}
								{/*				   checked/>*/}
								{/*		</label>*/}
								{/*	</div>*/}
								{/*</div>*/}
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
			</div>
			{/*<div className='w-full z-50 h-1/6 flex flex-row items-end justify-between px-3'>*/}
			{/*	<dialog id='editTradePost_modal' className='modal'>*/}
			{/*		<div className='modal-box rounded-xl'>*/}
			{/*			<form action={editTradePost} className='px-2 flex flex-col gap-4 items-end size-full'>*/}
			{/*				<label className='form-control size-full gap-4'>*/}
			{/*					Edit this post:*/}
			{/*					<input type='hidden' name='profileId' value={params.id}/>*/}
			{/*					<input type='hidden' name='userId' value={session.data?.user.id!}/>*/}
			{/*					<label className="input input-bordered flex items-center gap-2 rounded-xl">*/}
			{/*						Title:*/}
			{/*						<input type="text" name='title' className="grow" placeholder="Daisy"/>*/}
			{/*					</label>*/}
			{/*					<label className="input input-bordered flex items-center gap-2 rounded-xl">*/}
			{/*						Image:*/}
			{/*						<input type="text" name='image' className="grow" placeholder="daisy@site.com"/>*/}
			{/*					</label>*/}
			{/*					<textarea*/}
			{/*						className='textarea textarea-bordered w-full h-24 resize-none rounded-xl whitespace-pre-line'*/}
			{/*						name='description'*/}
			{/*						placeholder='Provide a discription for your post...'></textarea>*/}
			{/*					<label className="input input-bordered flex items-center gap-2 rounded-xl">*/}
			{/*						Price:*/}
			{/*						<input type="text" name='price' className="grow" placeholder="daisy@site.com"/>*/}
			{/*					</label>*/}
			{/*					<div className='flex flex-row items-center justify-evenly'>*/}
			{/*						<div className="form-control">*/}
			{/*							<label className="label cursor-pointer gap-4">*/}
			{/*								<span className="label-text">Selling</span>*/}
			{/*								<input type="radio" name="radio-10"*/}
			{/*									   className="radio checked:bg-green-500"*/}
			{/*									   checked/>*/}
			{/*							</label>*/}
			{/*						</div>*/}
			{/*						<div className="form-control">*/}
			{/*							<label className="label cursor-pointer gap-4">*/}
			{/*								<span className="label-text">Buying</span>*/}
			{/*								<input type="radio" name="radio-10" className="radio checked:bg-red-500"*/}
			{/*									   checked/>*/}
			{/*							</label>*/}
			{/*						</div>*/}
			{/*					</div>*/}
			{/*				</label>*/}
			{/*				<button*/}
			{/*					className='btn btn-outline rounded-xl btn-sm'*/}
			{/*					type='submit'*/}
			{/*					onClick={() => {*/}
			{/*						(document.getElementById('addTradePost_modal') as HTMLDialogElement).close();*/}
			{/*						// mutate(url);*/}
			{/*					}}>*/}
			{/*					Submit*/}
			{/*				</button>*/}
			{/*			</form>*/}
			{/*		</div>*/}
			{/*		<form method='dialog' className='modal-backdrop'>*/}
			{/*			<button>close</button>*/}
			{/*		</form>*/}
			{/*	</dialog>*/}
			{/*	<div className='join'>*/}
			{/*		<button className='join-item btn btn-sm btn-active'>1</button>*/}
			{/*		<button className='join-item btn btn-sm'>2</button>*/}
			{/*		<button className='join-item btn btn-sm'>3</button>*/}
			{/*		<button className='join-item btn btn-sm'>4</button>*/}
			{/*	</div>*/}
			{/*</div>*/}
		</div>
);
};

export default Posts;
