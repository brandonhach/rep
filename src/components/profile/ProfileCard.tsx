'use client';
import { FaXTwitter, FaReddit, FaDiscord, FaSteam } from 'react-icons/fa6';
import Image from 'next/image';
import { IoPersonAddSharp } from 'react-icons/io5';
import { IoSparkles } from 'react-icons/io5';
import { MdOutlineQuestionMark } from 'react-icons/md';
import { PiThumbsUpLight, PiThumbsDownLight } from 'react-icons/pi';
import EditProfileButton from './ui/ProfileEditButton';
import { StatusType, TProfileInfo } from '@/types/types';
import { IoShield } from 'react-icons/io5';
import { GoShield, GoShieldCheck } from 'react-icons/go';
import { FaBan } from 'react-icons/fa';
import RepButton from './ui/RepButton';
import RepForm from './ui/Forms/RepForm';
import ProfileForm from './ui/Forms/ProfileForm';

const ProfileCard = ({ profile, profileInfo, params }: any) => {
	return (
		<div className='w-full h-full grid grid-cols-1 grid-rows-3 border-[1px] border-transparent rounded-xl border-base-300'>
			<div className='row-span-2 relative'>
				<div className='relative w-full h-1/3 flex flex-col justify-end items-center '>
					<Image className='object-cover rounded-t-xl' src={`${profileInfo.backgroundImage}`} alt='' fill />
					<div className='absolute top-16 flex flex-col justify-center items-center'>
						<div className='avatar'>
							<div className='w-32 rounded-full ring ring-black ring-offset-black ring-offset-8'>
								<Image height={128} width={128} src={`${profile.image}`} alt='' />
							</div>
						</div>
						<h1 className='font-bold text-4xl pt-3 hover:cursor-default'>{profile.name} 🇺🇸</h1>
					</div>
				</div>
				<div className='pt-32 w-full flex flex-row justify-center items-center'>
					<div className='stat w-fit'>
						<div className='stat-title'>Contacts</div>
						<div className='stat-value'>{profileInfo.contacts}</div>
						<div className='stat-desc'>Public</div>
					</div>
					<div className='stat w-fit'>
						<div className='stat-title'>Followers</div>
						<div className='stat-value'>{profileInfo.followers}</div>
						<div className='stat-desc'>Public</div>
					</div>

					<div className='stat w-fit'>
						<div className='stat-title'>Status</div>
						<div className='stat-value flex flex-row justify-center items-center pb-1'>
							{profileInfo.status === StatusType.NONE && <IoShield className='text-neutral-500' />}
							{profileInfo.status === StatusType.SAFE && <GoShieldCheck className='text-green-500' />}
							{profileInfo.status === StatusType.CAUT && <GoShield className='text-yellow-500' />}
							{profileInfo.status === StatusType.BAN && <FaBan className='text-red-500' />}
						</div>
						<div className='stat-desc text-center'>{profileInfo.status}</div>
					</div>
					<div className='stat w-fit'>
						<div className='pb-4'>
							<div className='stat-title'>Rep</div>
							<div className='stat-value flex flex-row items-center justify-start'>
								<div className='flex flex-row badge badge-ghost h-9 rounded-xl'>
									<span className='w-14 flex flex-row items-center justify-end text-2xl gap-1'>
										<h1>{profileInfo.likes}</h1>
										<PiThumbsUpLight className='text-2xl text-green-500' />
									</span>

									<span className='w-14 flex flex-row items-center justify-end text-2xl gap-1'>
										<h1>{profileInfo.dislikes}</h1>
										<PiThumbsDownLight className='text-2xl text-red-500' />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='px-4 leading-5 w-full h-1/3 '>{profileInfo.description}</div>
			</div>
			<div className='flex flex-row items-center justify-center gap-2 pt-28'>
				<button className='btn btn-outline rounded-xl'>
					Follow <IoSparkles className='text-amber-200' />
				</button>
				<button className='btn btn-outline rounded-xl'>
					Add as Contact <IoPersonAddSharp className='text-amber-200' />
				</button>
				<RepButton />
				<EditProfileButton />
			</div>
			<div className='flex flex-row items-center justify-center pt-10'>
				<div className='px-4'>
					<h3 className='font-bold text-lg'>Linked Accounts</h3>
					<div>
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
				<div className='row-span-2 flex-col items-center justify-center p-4'>
					<div className='w-full '>
						<label className='form-control w-full max-w-xs'>
							<div className='label'>
								<span className='label-text'>Verification</span>
								<span className='label-text-alt tooltip' data-tip={`What's this?`}>
									<button className=''>
										<MdOutlineQuestionMark />
									</button>
								</span>
							</div>
							<input
								type='text'
								placeholder='Enter code'
								className='input input-bordered w-full max-w-xs rounded-xl'
							/>
						</label>
					</div>
				</div>

				{/* profile modal */}
				<dialog id='profileEdit_modal' className='modal'>
					<div className='modal-box rounded-xl'>
						<ProfileForm profileInfo={profileInfo}></ProfileForm>
					</div>
					<form method='dialog' className='modal-backdrop'>
						<button>close</button>
					</form>
				</dialog>

				{/* rep modal */}
				<dialog id='rep_modal' className='modal modal-open'>
					<div className='modal-box rounded-md border-[1px] border-white max-w-none w-[75rem] h-[50rem]'>
						<RepForm userId={profileInfo.userId} params={params}></RepForm>
					</div>
					<form method='dialog' className='modal-backdrop'>
						<button>close</button>
					</form>
				</dialog>
			</div>
		</div>
	);
};

export default ProfileCard;
