import React from 'react';
import Image from 'next/image';
import { FaDiscord, FaReddit, FaSteam, FaXTwitter } from 'react-icons/fa6';
import { RxLinkBreak1 } from 'react-icons/rx';
import { PiLinkSimpleBreakBold } from 'react-icons/pi';

const BasicInfo = () => {
	return (
		<div className='size-full flex flex-col'>
			<h1 className='font-bold text-2xl'>Basic Information</h1>
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
						<button className='btn btn-outline rounded-xl' disabled>
							Change avatar
						</button>
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
								placeholder='John Doe'
								className='input input-bordered w-full max-w-xs  rounded-xl'
								disabled
							/>
						</label>
						{/* Country */}
						<label className='form-control w-full max-w-xs'>
							<div className='label'>
								<span className='label-text'>Country</span>
							</div>
							<select className='select select-bordered  rounded-xl' disabled>
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
					<div className='w-1/2 p-4 flex flex-col items-center justify-center gap-1'>
						<h1 className='font-bold'>Connected Accounts</h1>
						<div className='pt-2'>
							<button>
								<div className='bg-[#7289da] rounded-full p-2 text-white'>
									<FaDiscord />
								</div>
							</button>
							<button>
								<div className='bg-stone-950 rounded-full p-2 text-white'>
									<FaSteam />
								</div>
							</button>
							<button>
								<div className='bg-[#FF4500] rounded-full p-2 text-white'>
									<FaReddit />
								</div>
							</button>
							<button>
								<div className='bg-stone-950 rounded-full p-2 text-white'>
									<FaXTwitter />
								</div>
							</button>
						</div>
					</div>
					<div className='divider lg:divider-horizontal'></div>
					<div className='w-1/2 p-4 flex flex-col gap-2'>
						{/* Name */}
						<label className='form-control w-full'>
							<div className='label'>
								<button className='btn btn-outline rounded-xl'>
									<PiLinkSimpleBreakBold className='text-2xl' />
									Link other accounts
								</button>
							</div>
						</label>
						<label className='form-control w-full'>
							<div className='label'>
								<button className='btn btn-outline rounded-xl'>
									<RxLinkBreak1 className='text-2xl' /> Detach other accounts
								</button>
							</div>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BasicInfo;
