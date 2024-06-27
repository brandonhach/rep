import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { MdOutlineAddReaction } from 'react-icons/md';
import useSWR, { mutate } from 'swr';
import { TComment } from '@/types/types';
import { useSession } from 'next-auth/react';
import { addComment } from '@/actions/comments/add-comment';
import { getComments } from '@/actions/comments/get-comments';
import { useInView } from 'react-intersection-observer'

/**
 * TODO:
 * 1. Suspend button click after comment action
 * 2. Pagination (10 rows)
 * 3. Type case the forms (including refactor form as react-hook-form, form validation with zod).
 * 4. Documentation
 */

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const NUMBER_OF_COMMENTS_TO_FETCH = 10;

const Comments = ({ params, comments }: any) => {
	const session = useSession();
	const [userComments, setUserComments] = useState<TComment[]>(comments);
	const [offset, setOffset] = useState(NUMBER_OF_COMMENTS_TO_FETCH); //Offset is max number of entries to be shown
	const [hasMoreComments, setHasMoreComments] = useState(true); //Determines whether there are more comments to fetch.
	const { ref, inView } = useInView(); //Used to detect when element "Ref" enters the viewport, inView will be true when element is in view which laods more comments

	const loadMoreComments = async () => {
		{/*Fetching comments asynchronously from getComments functions in actions folder*/}
		const apiComments = await getComments(params.id, offset, NUMBER_OF_COMMENTS_TO_FETCH);

		{/*Checks if number of comments fetched is less than 10, is so theres no more comments to load and set to false*/}
		if(apiComments.length < NUMBER_OF_COMMENTS_TO_FETCH) {
			setHasMoreComments(false);
		}

		// setUserComments([...userComments, ...apiComments]); //Concatenating new comments (apiComments) with existing ones (userComments)
		// setOffset(offset + NUMBER_OF_COMMENTS_TO_FETCH); //Update offset for next fetch so next batch of comments is fetched correctly
		setUserComments((prevComments) => [...prevComments, ...apiComments]);
        setOffset((prevOffset) => prevOffset + NUMBER_OF_COMMENTS_TO_FETCH);
	}

	const handleAddComment = async (formData: FormData) => {
        const response = await addComment(formData);
        if (response.success) {
			const newComment: TComment = {
				id: response.comment.id,
				name: response.comment.name ?? 'null',
				content: response.comment.content,
				emotes: response.comment.emotes,
				userId: response.comment.userId,
				createdAt: response.comment.createdAt.toISOString(),
				updatedAt: response.comment.updatedAt.toISOString(),
				image: response.comment.image,
			};
	
			setHasMoreComments(true);
			setUserComments((prevComments) => [...prevComments, newComment]);
		}  
    };

	{/*useEffect executes when inView changes (Component comes into view)*/}
	useEffect(() => {
		if (inView) {
			loadMoreComments(); //Calls this function when inView is true which fetches more comments
		}
	}, [inView])


	// const url = params.id ? `/api/profile/${params.id}/comment` : null;
	// const { data, error, isLoading } = useSWR(url, fetcher, { revalidateOnFocus: false });
	// if (error) return <div>Failed to load</div>;
	// if (isLoading)
	// 	return (
	// 		<div className='size-full flex flex-col items-center justify-center'>
	// 			<span className='loading loading-dots loading-lg'></span>
	// 		</div>
	// 	);

	return (
		<div className='w-full h-full overflow-auto'>
			<div className='w-full h-5/6 grid grid-cols-1 auto-rows-max overflow-auto scrollbar-hide'>
				{userComments.length === 0 ? (
					<div className='w-full h-32 px-4 flex flex-row items-center justify-start gap-4'>
						<h1 className='text-6xl font-bold'>No comments.</h1>
						<div className='size-24 relative'>
							<Image src={'/gif/why.gif'} className='object-cover rounded-t-xl' alt='' fill></Image>
						</div>
					</div>
				) : (
					userComments.map((comment: TComment) => (
						<div
							key={comment.id}
							className='col-span-1 m-2 rounded-xl relative overflow-hidden py-4 pb-6 hover:bg-base-200 duration-200 '>
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
									<p className='text-sm text-gray-500'>
										{new Date(comment.createdAt).toLocaleDateString()}
									</p>
								</div>
							</div>
							<div className='w-full h-auto px-4 flex flex-row items-start justify-between'>
								<div className='w-2/3 h-auto'>
									<p className='whitespace-pre-line w-full'>{comment.content}</p>
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
					))
				)}
				<div ref={ref}>
					{/*If more comments to load (true), the loading message is displayed*/}
					{hasMoreComments && userComments.length >= 10 &&
						<div className='flex items-center justify-center'>
							<span className="loading loading-dots loading-lg"></span>
						</div>
					}
					{/*If no more comments to load (false), message for no more comment appears*/}
          			{!hasMoreComments && userComments.length >= 10 && <p className='text-2xl text-center'>No more comments available.</p>}
				</div>
			</div>
			{/* Open modal using comment modal id (daisy ui) */}
			<div className='w-full z-50 h-1/6 flex flex-row items-end justify-between px-3'>
				<button
					className='btn rounded-xl'
					onClick={() => (document.getElementById('comment_modal') as HTMLDialogElement).showModal()}>
					Leave a comment
				</button>
				<dialog id='comment_modal' className='modal'>
					<div className='modal-box rounded-xl'>
						<form onSubmit={async (e) => {
							e.preventDefault();
							const formData = new FormData(e.target as HTMLFormElement);
                            await handleAddComment(formData);
						}} 
						className='px-2 flex flex-col gap-4 items-end size-full'>
							<label className='form-control size-full'>
								<input type='hidden' name='profileId' value={params.id} />
								<input type='hidden' name='userId' value={session.data?.user.id!} />
								<textarea
									className='textarea textarea-bordered w-full h-24 resize-none rounded-xl whitespace-pre-line'
									name='content'
									placeholder='Leave a comment'></textarea>
							</label>
							<button
								className='btn btn-outline rounded-xl btn-sm'
								type='submit'
								onClick={() => {
									(document.getElementById('comment_modal') as HTMLDialogElement).close();
									// mutate(url);
								}}>
								Comment
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

export default Comments;
