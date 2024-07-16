'use client';
// import { PostsConfig } from '@/config/site-config';
// import Image from 'next/image';
import React, {useEffect, useState} from 'react';
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
	const [postType, setPostType] = useState('');

	useEffect(() => {
		if (selectedTradePost?.postType) {
			setPostType(selectedTradePost.postType);
		}
	}, [selectedTradePost]);

	const handleAddTradePost = () => {
		const form = document.getElementById('addTradePost_form') as HTMLFormElement
		const modal = document.getElementById('addTradePost_modal') as HTMLDialogElement
		form.reset();
		modal.showModal();
	}

	const handleEditTradePost = (tradePost: TTradePost) => {
		setSelectedTradePost(tradePost);
		(document.getElementById('editTradePost_modal') as HTMLDialogElement).showModal();
	};

	return (
		<div className='w-full h-full overflow-auto'>
			<div className='w-full h-full grid grid-cols-2 auto-rows-[328px] overflow-auto'>
				{tradePosts.length === 0 ? (
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
											onClick={() => handleEditTradePost(tradePost)}>
										<MdEditSquare/>
									</button>
								) : null}
							</DirectionAwareHover>
						</div>
					))
				)}
				{tradePosts.length === 0 && params.id === session.data?.user.id || params.id === session.data?.user.id ? (
					<div
						className="flex justify-center items-center bg-stone-950 col-span-1 m-4 rounded-xl relative overflow-hidden">
						<button className="btn rounded-xl"
								onClick={handleAddTradePost}>
							<MdAddBox/> Create new post
						</button>
					</div>
				) : null}
			</div>

			{tradePosts.length === 0 && params.id === session.data?.user.id || params.id === session.data?.user.id ? (
				<dialog id='addTradePost_modal' className='modal'>
					<div className='modal-box rounded-xl'>
						<form id='addTradePost_form' action={addTradePost}
							  className='px-2 flex flex-col gap-4 items-end size-full'>
							<label className='form-control size-full gap-4'>
								Create a new post:
								<input type='hidden' name='profileId' value={params.id}/>
								<input type='hidden' name='userId' value={session.data?.user.id!}/>
								<label className="form-control w-full">
									<div className="label">
										<span className="label-text">Title</span>
									</div>
									<input type="text" name='title' placeholder="Enter title..."
										   className="input input-bordered w-full rounded-xl"/>
								</label>
								<label className="form-control w-full">
									<div className="label">
										<span className="label-text">Image</span>
									</div>
									<input type="text" name='image' placeholder="Enter url..."
										   className="input input-bordered w-full rounded-xl"/>
								</label>
								<label className="form-control w-full">
									<div className="label">
										<span className="label-text">Description</span>
									</div>
									<textarea name='description'
											  className="textarea textarea-bordered text-base h-24 rounded-xl"
											  placeholder="Enter description..."
											  ></textarea>
								</label>
								<label className="form-control w-full">
									<div className="label">
										<span className="label-text">Price</span>
									</div>
									<input type="text" name='price' placeholder="Enter price..."
										   className="input input-bordered w-full rounded-xl"/>
								</label>
								<div className='flex flex-row items-center justify-evenly py-4'>
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
												   className="radio"
												   checked/>
										</label>
									</div>
								</div>
							</label>
							<button
								className='btn btn-outline rounded-xl btn-sm'
								type='submit'
								onClick={() => (document.getElementById('addTradePost_modal') as HTMLDialogElement).close()}>
								Submit
							</button>
						</form>
					</div>
					<form method='dialog' className='modal-backdrop'>
						<button>close</button>
					</form>
				</dialog>
			) : null}

			{tradePosts.length === 0 && params.id === session.data?.user.id || params.id === session.data?.user.id ? (
				<dialog id='editTradePost_modal' className='modal'>
					<div className='modal-box rounded-xl'>
						<form action={editTradePost} className='px-2 flex flex-col gap-4 items-end size-full'>
							<label className='form-control size-full gap-4'>
								Edit this post:
								<input type='hidden' name='id' value={selectedTradePost?.id}/>
								<input type='hidden' name='profileId' value={params.id}/>
								<input type='hidden' name='userId' value={session.data?.user.id!}/>
								<label className="form-control w-full">
									<div className="label">
										<span className="label-text">Title</span>
									</div>
									<input type="text" name='title' placeholder="Enter title..."
										   className="input input-bordered w-full rounded-xl"
										   defaultValue={selectedTradePost?.title}/>
								</label>
								<label className="form-control w-full">
									<div className="label">
										<span className="label-text">Image</span>
									</div>
									<input type="text" name='image' placeholder="Enter url..."
										   className="input input-bordered w-full rounded-xl"
										   defaultValue={selectedTradePost?.image}/>
								</label>
								<label className="form-control w-full">
									<div className="label">
										<span className="label-text">Description</span>
									</div>
									<textarea name='description'
											  className="textarea textarea-bordered text-base h-24 rounded-xl"
											  placeholder="Enter description..."
											  defaultValue={selectedTradePost?.description}/>
								</label>
								<label className="form-control w-full">
									<div className="label">
										<span className="label-text">Price</span>
									</div>
									<input type="text" name='price' placeholder="Enter price..."
										   className="input input-bordered w-full rounded-xl"
										   defaultValue={selectedTradePost?.price}/>
								</label>
								<div className='flex flex-row items-center justify-evenly py-4'>
									<div className="form-control">
										<label className="label cursor-pointer gap-4">
											<span className="label-text">Selling</span>
											<input type="radio" name="postType" defaultValue="Selling"
												   className="radio"
												   checked={postType === 'Selling'}
												   onChange={() => setPostType('Selling')}/>
										</label>
									</div>
									<div className="form-control">
										<label className="label cursor-pointer gap-4">
											<span className="label-text">Buying</span>
											<input type="radio" name="postType" defaultValue="Buying"
												   className="radio"
												   checked={postType === 'Buying'}
												   onChange={() => setPostType('Buying')}/>
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
			) : null}
		</div>
	);
};

export default Posts;
