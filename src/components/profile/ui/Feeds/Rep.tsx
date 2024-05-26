import React from 'react';
import Flag from 'react-world-flags';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { PiThumbsUpLight } from 'react-icons/pi';
import Image from 'next/image';
import { RepConfig } from '@/config/site-config';

const Rep = () => {
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
					{/* row 1 */}
					{RepConfig.Reps.map((user, index) => {
						return (
							<>
								<tr key={index}>
									<td>
										<div className='flex flex-row items-center justify-start gap-3 btn btn-ghost w-full h-16 rounded-xl'>
											<div className='avatar'>
												<div className='avatar rounded-full w-14'>
													<Image
														src={`${user.image}`}
														height={48}
														width={48}
														alt='avatar'></Image>
												</div>
											</div>
											<div className='flex flex-col items-start justify-center'>
												<div className='font-bold pb-1'>{user.name}</div>
												<div className='flex flex-row items-center justify-start gap-2'>
													<Flag code={`${user.country}`} height='30' width='30' />

													<div className='badge badge-ghost badge-lg rounded-xl flex flex-row justify-center items-center text-center gap-1'>
														<span className='text-green-500 text-md font-bold'>
															{user.rep}
														</span>
														<PiThumbsUpLight className='text-lg text-green-500' />
													</div>
												</div>
											</div>
										</div>
									</td>
									<td>
										<p>{user.business}</p>
										<br />
										<div className='flex flex-row gap-2'>
											{user.transaction.map((item, index) => {
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
										{user.rating ? (
											<h3 className='text-green-600 font-extrabold text-2xl'>+rep</h3>
										) : (
											<h3 className='text-red-600 font-extrabold text-2xl'>-rep</h3>
										)}
									</td>
									<th className=''>
										<button className='btn rounded-xl indicator' data-tip='Click to view logs'>
											<span className='indicator-item badge badge-primary badge-xs rounded-xl z-0'>
												Logs
											</span>
											<IoDocumentTextOutline className='text-2xl  ' />
										</button>
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
