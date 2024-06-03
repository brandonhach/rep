import React from 'react';
import Image from 'next/image';

const BasicInfo = () => {
	return (
		<div className='size-full flex flex-col'>
			<div className='size-full grid grid-cols-1 auto-rows-auto p-2 gap-4'>
				<div className='bg-base-200/50 flex flex-row justify-between rounded-xl'>
					<div className='w-1/2 p-4 flex flex-row items-center justify-center gap-4'>
						<div className='avatar'>
							<div className='avatar rounded-full w-30 ring-black ring-offset-black ring-offset-1'>
								<Image
									src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
									height={128}
									width={128}
									alt='avatar'></Image>
							</div>
						</div>
						<button className='btn btn-outline rounded-xl'>Change avatar</button>
					</div>
					<div className='divider lg:divider-horizontal'></div>
					<div className='w-1/2 p-4 flex flex-col gap-2'>
						{/* Name */}
						<label className='form-control w-full max-w-xs'>
							<div className='label'>
								<span className='label-text'>Name</span>
							</div>
							<input
								type='text'
								placeholder='Type here'
								className='input input-bordered w-full max-w-xs  rounded-xl'
							/>
						</label>
						{/* Country */}
						<label className='form-control w-full max-w-xs'>
							<div className='label'>
								<span className='label-text'>Country</span>
							</div>
							<select className='select select-bordered  rounded-xl'>
								<option disabled selected>
									USA
								</option>
								<option>KR</option>
								<option>JPN</option>
							</select>
						</label>
					</div>
				</div>
				<div className='bg-base-200/50 flex flex-row justify-between rounded-xl'>
					<div className='w-1/2 p-4'>
						<h1>Connected Accounts</h1>
						<p></p>
					</div>
					<div className='divider lg:divider-horizontal'></div>
					<div className='w-1/2 p-4 flex flex-col gap-2'>
						{/* Name */}
						<label className='form-control w-full max-w-xs'>
							<div className='label'>
								<span className='label-text'>Name</span>
							</div>
							<input
								type='text'
								placeholder='Type here'
								className='input input-bordered w-full max-w-xs  rounded-xl'
							/>
						</label>
						{/* Country */}
						<label className='form-control w-full max-w-xs'>
							<div className='label'>
								<span className='label-text'>Country</span>
							</div>
							<select className='select select-bordered  rounded-xl'>
								<option disabled selected>
									USA
								</option>
								<option>KR</option>
								<option>JPN</option>
							</select>
						</label>
					</div>
				</div>

				<div className='bg-base-200/50'>1</div>
			</div>
		</div>
	);
};

export default BasicInfo;
