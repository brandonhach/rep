import { AffiliationConfig } from '@/config/site-config';
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { TAffiliation} from '@/types/types';
import { addAffiliation } from '@/actions/affiliations/add-affiliations';

const Affiliation = ({ params, affiliations }: any) => {
	const session = useSession();
	return (
		<div className='w-full h-full overflow-x-auto relative'>
			<div className='grid auto-cols-[21.8rem] grid-flow-col gap-4 p-4'>
				{affiliations.length === 0 ? (
					<div className='w-full h-full flex flex-row items-center justify-start'>
						<h1 className='text-4xl font-bold'>No Affiliations.</h1>
					</div>
				) : (
					affiliations.map((affiliation: TAffiliation) => (
						<div key={affiliation.id} className='row-span-1 m-4 rounded-xl relative overflow-hidden'>
							<div className='flex flex-col justify-center items-center pt-2'>
								<div className='flex items-center justify-center'>
									<div className='avatar'>
										<div className='w-36 mask mask-squircle'>
											<Image className='object-cover' src={`${affiliation.platformImage}`} alt='' fill />
										</div>
									</div>
								</div>
								<div className='flex flex-col items-center justify-center gap-1 pt-4'>
									{/* <h4 className=''>Verified: {affiliation.verified.toString()}</h4> */}
									<h4 className='text-xs badge badge-outline border-white rounded-xl badge-md'>
										{affiliation.platform}
									</h4>
									<h3 className='text-pre'>{affiliation.affiliationRole}</h3>
									<h1 className='font-bold text-2xl'>{affiliation.affiliationTitle}</h1>
								</div>
							</div>
						</div>
					))
				)}
			</div>
				{/*Display create affiliation button if user id equal the profile id*/}
				{affiliations.length === 0 && params.id === session.data?.user.id && (
					<div>
						<button className="btn rounded-xl"
							onClick={() => (document.getElementById('affiliation_modal') as HTMLDialogElement).showModal()}>
							Add an affiliation
						</button>
						<dialog id="affiliation_modal" className="modal">
							<div className="modal-box rounded-xl">
								<form method="dialog">
									{/*Closes the modal box*/}
									<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
								</form>
								<form action={addAffiliation} className='px-2 py-2 flex flex-col gap-4 items-end size-full'>
									<label className='form-control size-full'>
									<input type='hidden' name='profileId' value={params.id} />
									<input type='hidden' name='userId' value={session.data?.user.id!} />
										<input
											className="input input-bordered w-full rounded-xl whitespace-pre-line mb-2"
											type="text"
											name='affiliationTitle'
											placeholder="Enter your affiliation title"
										/>
										<input
											className="input input-bordered w-full rounded-xl whitespace-pre-line mb-2"
											type="text"
											name='affiliationRole'
											placeholder="Enter your affiliation role"
										/>
										<input
											className="input input-bordered w-full rounded-xl whitespace-pre-line mb-2"
											type="text"
											name='platform'
											placeholder="Enter your platform"
										/>
										<input
											className="input input-bordered w-full rounded-xl whitespace-pre-line mb-2"
											type="text"
											name='platformImage'
											placeholder="Enter your platform's image (URL to Unsplash atm)"
										/>
										<input
											className="input input-bordered w-full rounded-xl whitespace-pre-line mb-2"
											type="text"
											name='platformURL'
											placeholder="Enter the URL to your platform"
										/>
									</label>
									<button
										className='btn btn-outline rounded-xl btn-sm'
										type='submit'
										onClick={() => {
											(document.getElementById('affiliation_modal') as HTMLDialogElement).close();
										}}>
										Add Affiliation
									</button>
								</form>
							</div>
						</dialog>
					</div>
				)}
				<div className="join flex flex-row justify-end absolute">
					<button className="join-item btn btn-active">1</button>
					<button className="join-item btn">2</button>
					<button className="join-item btn">3</button>
					<button className="join-item btn">4</button>
			</div>
		</div>
	);
};

export default Affiliation;