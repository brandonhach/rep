import { FaXTwitter, FaReddit, FaDiscord, FaSteam } from 'react-icons/fa6';
import Image from 'next/image';
import { ProfileConfig } from '@/config/site-config';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { MdCompareArrows } from 'react-icons/md';
import { IoPersonAddSharp } from 'react-icons/io5';
import { IoSparkles } from 'react-icons/io5';
import { MdOutlineQuestionMark } from 'react-icons/md';

const ProfileCard = ({ profile }: any) => {
	return (
		<div className='w-full h-full grid grid-cols-1 grid-rows-3 border-[2px] border-transparent rounded-xl'>
			<div className='row-span-2 relative'>
				<div className='relative w-full h-1/3 flex flex-col justify-end items-center border-transparent rounded-xl'>
					<Image className='object-cover' src={`${ProfileConfig.bgImage}`} alt='' fill />
					<div className='absolute top-16 flex flex-col justify-center items-center'>
						<div className='avatar'>
							<div className='w-32 rounded-full ring ring-black ring-offset-black ring-offset-8'>
								<Image height={128} width={128} src={`${profile.image}`} alt='' />
							</div>
						</div>
						<h1 className='font-bold text-4xl pt-3 hover:cursor-default'>{profile.name}</h1>
					</div>
				</div>
				<div className='pt-32 w-full flex flex-row justify-center items-center'>
					<div className='stat w-fit'>
						<div className='stat-title'>Contacts</div>
						<div className='stat-value'>28</div>
						<div className='stat-desc'>Public</div>
					</div>
					<div className='stat w-fit'>
						<div className='stat-title'>Followers</div>
						<div className='stat-value'>152</div>
						<div className='stat-desc'>Public</div>
					</div>
					<div className='stat w-fit'>
						<div className='stat-title'>Feedback</div>
						<div className='stat-value'>50%</div>
						<div className='stat-desc'>Positive</div>
					</div>
					<div className='stat w-fit'>
						<div className='stat-title pb-1'>Reputation</div>
						<div className='stat-value flex flex-row justify-center items-center'>
							<VscWorkspaceTrusted className='text-green-500' />
						</div>
						<div className='stat-desc text-center'>Safe</div>
					</div>
				</div>
				<div className='px-4 font-light leading-5 w-full h-1/3 '>{ProfileConfig.description}</div>
			</div>
			<div className='flex flex-row items-center justify-center gap-2 pt-32'>
				<button className='btn btn-outline rounded-xl'>
					Follow <IoSparkles />
				</button>
				<button className='btn btn-outline rounded-xl'>
					Add as Contact <IoPersonAddSharp />
				</button>
				<button className='btn btn-outline rounded-xl'>
					Rep
					<MdCompareArrows />
				</button>
			</div>

			<div className='row-span-2 flex-col items-center justify-center p-4'>
				<div className='w-full pb-10'>
					<label className='form-control w-full max-w-xs'>
						<div className='label'>
							<span className='label-text'>Verification</span>
							<span className='label-text-alt tooltip' data-tip={`What's this?`}>
								<button className=''>
									<MdOutlineQuestionMark />
								</button>
							</span>
						</div>
						<input type='text' placeholder='Enter code' className='input input-bordered w-full max-w-xs' />
					</label>
				</div>
				<div className='pb-10'>
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
			</div>
		</div>
	);
};

export default ProfileCard;
