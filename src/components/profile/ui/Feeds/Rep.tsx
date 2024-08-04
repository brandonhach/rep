import React from 'react';
import Flag from 'react-world-flags';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { PiThumbsUpLight } from 'react-icons/pi';
import Image from 'next/image';
import { TRep } from '@/types/types';
import Link from 'next/link';
import LogButton from './Rep/LogBtn';
import Log from './Rep/Log';

const Rep = ({ reps }: { reps: TRep[] }) => {
	return (
		<div className='h-full w-full overflow-y-auto'>
			<table className='table table-pin-rows'>
				{/* head */}
				<thead>
					<tr>
						<th className='w-10'>User details</th>
						<th className='w-2/5'>Business Summary</th>
						<th className='w-4'>Rating</th>
						<th className='w-4'>Details & Records</th>
					</tr>
				</thead>
				<tbody>
					{reps.map((rep, index) => {
						return (
							<>
								<tr key={index}>
									<td>
										<Link
											className='flex flex-row items-center justify-start gap-3 btn btn-ghost w-full h-16 rounded-xl'
											href={`/profile/${rep.userId}`}>
											<div className='avatar'>
												<div className='avatar rounded-full w-14 ring-black ring-offset-black ring-offset-1'>
													<Image
														src={`${rep.user.image}`}
														height={48}
														width={48}
														alt='avatar'></Image>
												</div>
											</div>
											<div className='flex flex-col items-start justify-center'>
												<div className='font-bold pb-1'>{rep.user.name}</div>
												<div className='flex flex-row items-center justify-start gap-2'>
													<Flag code={`${rep.user.country}`} height='30' width='30' />

													<div className='badge badge-ghost badge-lg rounded-xl flex flex-row justify-center items-center text-center gap-1'>
														<span className='text-green-500 text-md font-bold'>
															{rep.rating}
														</span>
														<PiThumbsUpLight className='text-lg text-green-500' />
													</div>
												</div>
											</div>
										</Link>
									</td>
									<td>
										<p>{rep.description}</p>
										<br />
										<div className='flex flex-row gap-2'>
											{rep.keywords.map((item, index) => {
												return (
													<>
														<div
															key={index}
															className='badge badge-ghost badge-sm rounded-xl hover:cursor-default'>
															{item}
														</div>
													</>
												);
											})}
										</div>
									</td>
									<td>
										{rep.rating ? (
											<h3 className='text-green-600 font-extrabold text-2xl'>+rep</h3>
										) : (
											<h3 className='text-red-600 font-extrabold text-2xl'>-rep</h3>
										)}
									</td>
									<th className=''>
										<LogButton></LogButton>
										{/* Log Button */}
										<dialog id='log_modal' className='modal'>
											<div className='modal-box rounded-md max-w-none w-[75rem] h-[50rem]'>
												{/* <Log log={rep.logs.}></Log> */}
											</div>
											<form method='dialog' className='modal-backdrop'>
												<button>close</button>
											</form>
										</dialog>
									</th>
								</tr>
							</>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Rep;
