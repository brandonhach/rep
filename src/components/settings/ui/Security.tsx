import React from 'react';
import Image from 'next/image';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaRegTrashCan } from 'react-icons/fa6';

const Security = () => {
	return (
		<div className='size-full flex flex-col gap-4'>
			<h1 className='font-bold text-2xl'>Security</h1>
			{/* 2FA */}
			<div className='bg-base-200/50 flex flex-row justify-between rounded-xl'>
				<div className='w-2/5 p-8 flex flex-col items-start justify-center gap-1'>
					<h1 className='font-bold text-xl'>2-Step Verification</h1>
					<p className='text-sm text-neutral-500'>Protect Your Account with 2-Step Verification</p>
				</div>
				<div className='divider lg:divider-horizontal'></div>
				<div className='w-3/5 p-4 flex flex-row items-center justify-start gap-10'>
					<label className='label cursor-pointer gap-4'>
						<span className='label-text'>Enable 2FA authentication</span>
						<input type='checkbox' className='toggle' defaultChecked />
					</label>
				</div>
			</div>
			{/* Rep Authenticator */}
			<div className='bg-base-200/50 flex flex-row justify-between rounded-xl'>
				<div className='w-2/5 p-8 flex flex-col items-start justify-center gap-1'>
					<h1 className='font-bold text-xl'>Rep Code-Authenticator</h1>
					<p className='text-sm text-neutral-500'>
						Active to enable the authenticator. Turns off automatically after 10 minutes.
					</p>
				</div>
				<div className='divider lg:divider-horizontal'></div>
				<div className='w-3/5 p-4 flex flex-row items-center justify-start gap-10'>
					<div className='form-control'>
						<label className='label cursor-pointer gap-4'>
							<span className='label-text'>Toggle authentication</span>
							<input type='checkbox' className='toggle' defaultChecked />
							<span className='loading loading-ball loading-lg text-green-500'></span>
							<div></div>
						</label>
					</div>
				</div>
			</div>
			{/* Browsers & devices */}
			<div className='bg-base-200/50 flex flex-col justify-between rounded-xl'>
				<div className='w-full px-8 pt-8 flex flex-col items-start justify-center gap-1'>
					<h1 className='font-bold text-xl'>Browsers & devices</h1>
					<p className='text-sm text-neutral-500'>
						These browsers & devices are currently signed in to your account. Remove any unauthorized
						devices.
					</p>
				</div>
				<div className='divider'></div>
				<div className='w-full px-4 flex flex-row items-center justify-start'>
					<div className='overflow-x-auto w-full'>
						<table className='table'>
							{/* head */}
							<thead>
								<tr>
									<th></th>
									<th>Devices</th>
									<th>Location</th>
									<th>Session</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{/* row 1 */}
								<tr>
									<th>1</th>
									<td className='flex flex-row items-center gap-2'>
										<FcGoogle />
										Google Chrome on Window 11
									</td>
									<td>Raleigh, United State</td>
									<td>Current session</td>
									<td>
										<button className=''>
											<FaRegTrashCan className='text-xl text-neutral-500' />
										</button>
									</td>
								</tr>
								{/* row 2 */}
								<tr>
									<th>2</th>
									<td className='flex flex-row items-center gap-2'>
										<FaApple /> Safari on Macbook
									</td>
									<td>Charlotte, United State</td>
									<td>1 month ago</td>{' '}
									<td>
										<button className=''>
											<FaRegTrashCan className='text-xl text-neutral-500' />
										</button>
									</td>
								</tr>
								{/* row 3 */}
								<tr>
									<th>3</th>
									<td className='flex flex-row items-center gap-2'>
										<FaApple /> Safari on Iphone
									</td>
									<td>Seoul, South Korea</td>
									<td>10 months ago</td>{' '}
									<td>
										<button className=''>
											<FaRegTrashCan className='text-xl text-neutral-500' />
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Security;
