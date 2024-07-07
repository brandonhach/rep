import React from 'react';
import Image from 'next/image';
import { FaDiscord, FaReddit, FaSteam, FaXTwitter } from 'react-icons/fa6';
import { CiEdit } from 'react-icons/ci';
import { PiLinkSimpleBreakBold } from 'react-icons/pi';
import { GrAppleAppStore } from 'react-icons/gr';
import { BsUpload } from 'react-icons/bs';

const BasicInfo = () => {
	return (
		<div className='size-full flex flex-col'>
			<h1 className='font-bold text-2xl'>Basic Information</h1>
			<div className='size-full grid grid-cols-1 auto-rows-auto p-2 gap-4'>
				{/* Avatar */}
				<div className='bg-base-200/50 flex flex-row justify-between rounded-xl'>
					<div className='w-2/5 p-8 flex flex-col items-start justify-center gap-1'>
						<h1 className='font-bold text-xl'>Profile Avatar</h1>
						<p className='text-sm text-neutral-500'>
							Your avatar will appear on your profile and be visible to all users.
						</p>
					</div>
					<div className='divider lg:divider-horizontal'></div>
					<div className='w-3/5 p-4 flex flex-row items-center justify-start gap-10'>
						<div className='avatar'>
							<div className='avatar rounded-full w-28 ring-black ring-offset-black ring-offset-1'>
								<Image
									src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
									height={128}
									width={128}
									alt='avatar'></Image>
							</div>
						</div>
						<div className='w-44 pt-7'>
							<button className='btn btn-outline rounded-xl w-full flex flex-row items-center' disabled>
								<BsUpload className='text-xl' /> Upload
							</button>
							<p className='text-xs text-neutral-500'>Image should be at least 184px x 184px.</p>
						</div>
					</div>
				</div>
				{/* Personal Info */}
				<div className='bg-base-200/50 flex flex-row justify-between rounded-xl'>
					<div className='w-2/5 p-8 flex flex-col items-start justify-center gap-1'>
						<h1 className='font-bold text-xl'>Profile Details</h1>
						<p className='text-sm text-neutral-500'>This will be displayed on your profile.</p>
					</div>
					<div className='divider lg:divider-horizontal'></div>
					<div className='w-3/5 p-4 flex flex-row items-center justify-start gap-10'>
						<label className='form-control w-full max-w-xs'>
							<div className='label'>
								<span className='label-text'>Profile Name</span>
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
				{/* Connected Accounts */}
				<div className='bg-base-200/50 flex flex-row justify-between rounded-xl'>
					<div className='w-2/5 p-8 flex flex-col items-start justify-center gap-1'>
						<h1 className='font-bold text-xl'>Connected Accounts</h1>
						<p className='text-sm text-neutral-500'>
							Manage & connect your external account to make your profile more personalized and
							convenient.
						</p>
					</div>
					<div className='divider lg:divider-horizontal'></div>
					<div className='w-3/5 p-4 flex flex-row items-center justify-start gap-10'>
						<div>
							<label className='form-control w-full'>
								<div className='label'>
									<button className='btn btn-ghost rounded-xl'>
										<PiLinkSimpleBreakBold className='text-xl' />
										Account Sync Settings
									</button>
								</div>
							</label>
						</div>
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
				</div>
				{/* Customization*/}
				<div className='bg-base-200/50 flex flex-row justify-between rounded-xl'>
					<div className='w-2/5 p-8 flex flex-col items-start justify-center gap-1'>
						<h1 className='font-bold text-xl'>Customize your profile</h1>
						<p className='text-sm text-neutral-500'>
							Update your profile to reflect your comprehensive online identity.
						</p>
					</div>
					<div className='divider lg:divider-horizontal'></div>
					<div className='w-3/5 p-4 flex flex-row items-center justify-start gap-10'>
						<button className='btn btn-ghost rounded-xl'>
							<CiEdit className='text-2xl' />
							Customize your Profile
						</button>
						<button className='btn btn-ghost rounded-xl'>
							<GrAppleAppStore className='text-2xl' />
							Theme Selection
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BasicInfo;
