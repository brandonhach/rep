'use client';
// import { PostsConfig } from '@/config/site-config';
// import Image from 'next/image';
import React, {useState} from 'react';
import { DirectionAwareHover } from '@/components/ui/DirectionAwareHover';
import {useSession} from "next-auth/react";
import {MdAddBox, MdEditSquare} from "react-icons/md";
import {TTradePost} from "@/types/types";
import {addTradePost} from "@/actions/trade-posts/add-trade-post";
import {editTradePost} from "@/actions/trade-posts/edit-trade-post";
import {deleteTradePost} from "@/actions/trade-posts/delete-trade-post";


const Posts = ({ params, tradePosts }: any) => {
	const session = useSession();
	const [selectedTradePost, setSelectedTradePost] = useState<TTradePost | null>(null);

	const handleEditClick = (tradePost: TTradePost) => {
		setSelectedTradePost(tradePost);
		(document.getElementById('editTradePost_modal') as HTMLDialogElement).showModal();
	};

	return (
		<div className='w-full h-full overflow-auto'>
			<div className='w-full h-full grid grid-cols-2 auto-rows-[328px] overflow-auto'>
				{tradePosts.length === 0 ?(
					<div className='w-full h-full flex justify-center items-center'>
						<h1 className='text-xl'>No Trade Posts</h1>
					</div>
				) : (
					tradePosts.map((tradePost: TTradePost) => (
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
								{tradePosts.length === 0 && params.id === session.data?.user.id || params.id === session.data?.user.id ? (
									<button className='btn rounded-xl absolute -top-2 -right-2'
											onClick={() => handleEditClick(tradePost)}>
										<MdEditSquare/>
									</button>
								) : null}
							</DirectionAwareHover>
						</div>
					))
				)}
				{tradePosts.length === 0 && params.id === session.data?.user.id || params.id === session.data?.user.id ? (
					<div className="flex justify-center items-center bg-stone-950 col-span-1 m-4 rounded-xl relative overflow-hidden">
						<button className="btn rounded-xl"
								onClick={() => (document.getElementById('addTradePost_modal') as HTMLDialogElement).showModal()}>
							<MdAddBox/> Create new post
						</button>
					</div>
				) : null}
			</div>
			<dialog id='addTradePost_modal' className='modal'>
				<div className='modal-box rounded-xl'>
					<form action={addTradePost} className='px-2 flex flex-col gap-4 items-end size-full'>
						<label className='form-control size-full gap-4'>
							Add a new post:
							<input type='hidden' name='profileId' value={params.id}/>
							<input type='hidden' name='userId' value={session.data?.user.id!}/>
							<label className="input input-bordered flex items-center gap-2 rounded-xl">
								Title:
								<input type="text" name='title' className="grow" placeholder="Enter Title..."/>
							</label>
							<label className="input input-bordered flex items-center gap-2 rounded-xl">
								Image:
								<input type="text" name='image' className="grow" placeholder="Enter Image URL..."/>
							</label>
							<label>
								Description
								<textarea
									className='textarea textarea-bordered w-full h-24 resize-none rounded-xl whitespace-pre-line'
									name='description'
									placeholder='Enter Description...'></textarea>
							</label>
							<label className="input input-bordered flex items-center gap-2 rounded-xl">
								Price:
								<input type="text" name='price' className="grow" placeholder="Enter Price..."/>
							</label>
							<div className='flex flex-row items-center justify-evenly'>
								<div className="form-control">
									<label className="label cursor-pointer gap-4">
										<span className="label-text">Selling</span>
										<input type="radio" name="postType" defaultValue="Selling"
											   className="radio checked:bg-green-500"
											   checked/>
									</label>
								</div>
								<div className="form-control">
									<label className="label cursor-pointer gap-4">
										<span className="label-text">Buying</span>
										<input type="radio" name="postType" defaultValue="Buying"
											   className="radio checked:bg-red-500"
											   checked/>
									</label>
								</div>
							</div>
						</label>
						<button
							className='btn btn-outline rounded-xl btn-sm'
							type='submit'
							onClick={() => {
								(document.getElementById('addTradePost_modal') as HTMLDialogElement).close();
							}}>
							Submit
						</button>
					</form>
				</div>
				<form method='dialog' className='modal-backdrop'>
					<button>close</button>
				</form>
			</dialog>
			<dialog id='editTradePost_modal' className='modal'>
				<div className='modal-box rounded-xl'>
					<form action={editTradePost} className='px-2 flex flex-col gap-4 items-end size-full'>
						<label className='form-control size-full gap-4'>
							Edit this post:
							<input type='hidden' name='id' value={selectedTradePost?.id}/>
							<input type='hidden' name='profileId' value={params.id}/>
							<input type='hidden' name='userId' value={session.data?.user.id!}/>
							<label className="input input-bordered flex items-center gap-2 rounded-xl">
								Title:
								<input type="text" name='title' className="grow" defaultValue={selectedTradePost?.title}/>
							</label>
							<label className="input input-bordered flex items-center gap-2 rounded-xl">
								Image:
								<input type="text" name='image' className="grow" defaultValue={selectedTradePost?.image}/>
							</label>
							<textarea
								className='textarea textarea-bordered w-full h-24 resize-none rounded-xl whitespace-pre-line'
								name='description'
								defaultValue={selectedTradePost?.description}></textarea>
							<label className="input input-bordered flex items-center gap-2 rounded-xl">
								Price:
								<input type="text" name='price' className="grow" defaultValue={selectedTradePost?.price}/>
							</label>
							<div className='flex flex-row items-center justify-evenly'>
								<div className="form-control">
									<label className="label cursor-pointer gap-4">
										<span className="label-text">Selling</span>
										<input type="radio" name="postType" defaultValue="Selling"
											   className="radio"
											   checked/>
									</label>
								</div>
								<div className="form-control">
									<label className="label cursor-pointer gap-4">
										<span className="label-text">Buying</span>
										<input type="radio" name="postType" defaultValue="Buying"
											   className="radio"/>
									</label>
								</div>
							</div>
						</label>
						<div className='flex flex-row w-full justify-between items-center'>
							<button
								className='btn btn-outline btn-error rounded-xl btn-sm'
								formAction={deleteTradePost}
								type='submit'
								onClick={() => {
									(document.getElementById('editTradePost_modal') as HTMLDialogElement).close();
								}}>
								Delete
							</button>
							<button
								className='btn btn-outline rounded-xl btn-sm'
								type='submit'
								onClick={() => {
									(document.getElementById('editTradePost_modal') as HTMLDialogElement).close();
								}}>
								Submit
							</button>
						</div>
					</form>
				</div>
				<form method='dialog' className='modal-backdrop'>
					<button>close</button>
				</form>
			</dialog>
		</div>
	);
};

export default Posts;
