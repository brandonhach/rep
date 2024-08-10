'use client';
import { TRep } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { FcAddImage } from 'react-icons/fc';
import { SiGoogledocs } from 'react-icons/si';

const Log = ({ rep }: { rep: TRep }) => {
	return (
		<div className='size-full flex flex-col gap-4'>
			<div className='w-full h-[10%] col-span-4 row-span-6 rounded-xl bg-base-200/50 p-2 flex flex-col items-start justify-start gap-4'>
				{/* Title & keywords */}
				<div className='flex flex-row items-start justify-between w-full'>
					<div className='flex flex-row gap-2'>
						{/* Avatars */}
						<div className='flex flex-row'>
							<div className='flex flex-row items-center justify-start gap-1'>
								<Link href={`/profile/${rep.userId}`} className='tooltip' data-tip={`${rep.user.name}`}>
									<Image
										src={`${rep.user.image}`}
										height={48}
										width={48}
										alt='avatar'
										className='rounded-full'></Image>
								</Link>
							</div>
							<div className='flex flex-row items-center justify-start gap-1'>
								<Link
									href={`/profile/${rep.profileId}`}
									className='tooltip'
									data-tip={`${rep.profile.name}`}>
									<Image
										src={`${rep.profile.image}`}
										height={48}
										width={48}
										alt='avatar'
										className='rounded-full'></Image>
								</Link>
							</div>
						</div>
						<h1>
							<span className='text-2xl font-bold'>{rep.log.title}</span>
							<div>
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
						</h1>
					</div>

					{/* Rating */}
					<div>
						{rep.rating ? (
							<h3 className='text-green-600 font-extrabold text-3xl'>+rep</h3>
						) : (
							<h3 className='text-red-600 font-extrabold text-3xl'>-rep</h3>
						)}
					</div>
				</div>
			</div>
			<div
				role='tablist'
				className='tabs tabs-lifted tabs-lg w-full h-[80%] flex flex-col items-start justify-start bg-base-200/50 rounded-lg'>
				<div role='tab' className='h-30 tab tab-active w-fit'>
					Log Description
				</div>
				<div className='size-full overflow-y-scroll scrollbar-hide'>
					{/* Description */}
					<p className='font-normal text-lg whitespace-pre-line px-4 py-2'>{rep.log.description}</p>
				</div>
			</div>
			{/* Files */}
			<div className='w-full h-[10%] flex flex-row items-center justify-start gap-2'>
				{/* 1 */}
				<div className='w-fit  p-1 rounded-lg hover:cursor-pointer bg-base-200/70'>
					<p className='font-semibold flex flex-row gap-1'>
						<FcAddImage className='text-xl' />
						screenshots184124.png <span className='text-neutral-100 font-thin px-1'>3.2MB</span>
					</p>
				</div>
				{/* 2*/}
				<div className='w-fit  p-1 rounded-lg hover:cursor-pointer bg-base-200/70 '>
					<p className='font-semibold flex flex-row gap-1'>
						<SiGoogledocs className='text-xl text-blue-400' />
						chatlog.doc <span className='text-neutral-100 font-thin px-1'>13.2MB</span>
					</p>
				</div>
				{/* 3 */}
				<div className='w-fit  p-1 rounded-lg hover:cursor-pointer bg-base-200/70'>
					<p className='font-semibold flex flex-row gap-1'>
						<FcAddImage className='text-xl' />
						screenshots1123231.png <span className='text-neutral-100 font-thin px-1'>2.4MB</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Log;

{
	/* Users  */
}
