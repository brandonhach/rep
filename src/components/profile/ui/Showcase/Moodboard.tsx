import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { TMoodboard } from '@/types/types';
import { db } from '@/lib/prisma';
import { addMoodboard } from '@/actions/moodboards/add-moodboards';
import {getMoodboards} from "@/actions/moodboards/get-moodboards";
import {undefined} from "zod";

const MOODS_PER_PAGE = 8;


const Moodboard = ({ params, moodboards }: any) => {
	const session = useSession();
	const [offset, setOffset] = useState(MOODS_PER_PAGE);
	const [moods, setMoods] = useState<TMoodboard[]>(moodboards);
	const [hasMoreData, setHasMoreData] = useState(true);
	const scrollTrigger = useRef(null);

	const loadMoreMoods = useCallback (async () => {
		if (hasMoreData) {
			const apiMoods = await getMoodboards(params.id, offset, MOODS_PER_PAGE)

			if (apiMoods.length == 0) {
				setHasMoreData(false);
			} else {
				setMoods((prevMoods) => [...prevMoods, ...apiMoods]);
				setOffset((prevOffset) => prevOffset + MOODS_PER_PAGE);
			}
		}
	}, [params.id, offset, hasMoreData]);

	useEffect(() => {
		if (typeof window === "undefined" || !window.IntersectionObserver) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					loadMoreMoods();
				}
			},
			{threshold: 0.5}
		);

		if (scrollTrigger.current) {
			observer.observe(scrollTrigger.current);
		}

		return () => {
			if (scrollTrigger.current) {
				observer.unobserve(scrollTrigger.current);
			}
		};
	}, [loadMoreMoods]);

	return (
		<div className='w-full h-full overflow-auto'>
			<div className='w-full h-full grid grid-cols-4 auto-rows-[328px] overflow-auto'>
				{moodboards.length === 0 ? (
					<div className='w-full h-full flex flex-row items-start justify-start'>
						<h1 className='text-4xl font-bold'>No Moodboards.</h1>
					</div>
				) : (
					moods.map((moodboard: TMoodboard) => (
						<div key={moodboard.id} className='col-span-1 m-4 rounded-xl relative overflow-hidden'>
							<Image className='object-cover rounded-t-xl' src={`${moodboard.moodboardImage}`} alt='' fill />
						</div>
					))
				)}
				<div>
					{hasMoreData ? (
						<div ref={scrollTrigger}>Loading...</div>
					) : (
						<p>You have reached the bottom.</p>
					)}
				</div>
			</div>
			<div className='w-full flex flex-row items-end justify-between'>
			{(moods.length === 0 && params.id === session.data?.user.id || params.id === session.data?.user.id ? (
					<div className='flex-1'>
					<button className="btn rounded-xl"
						onClick={() => (document.getElementById('moodboard_modal') as HTMLDialogElement).showModal()}>
						Add a moodboard
					</button>
					<dialog id="moodboard_modal" className="modal">
						<div className="modal-box rounded-xl">
							<form method="dialog">
								{/*Closes the modal box*/}
								<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
							</form>
							<form action={addMoodboard} className='px-2 py-2 flex flex-col gap-4 items-end size-full'>
								<label className='form-control size-full'>
									<input type='hidden' name='profileId' value={params.id} />
									<input type='hidden' name='userId' value={session.data?.user.id!} />
									<input
										className="input input-bordered w-full rounded-xl whitespace-pre-line"
										type="text"
										name='moodboardImage'
										placeholder="Enter your moodboard unsplash URL"
									/>
								</label>
								<button
									className='btn btn-outline rounded-xl btn-sm'
									type='submit'
									onClick={() => {
										(document.getElementById('moodboard_modal') as HTMLDialogElement).close();
									}}>
									Add Moodboard
								</button>
							</form>
						</div>
					</dialog>
				</div>
			) : null)}
			</div>
		</div>
	);
};

export default Moodboard;
