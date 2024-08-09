'use client';
import { TLog, TRep } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

const Log = ({ rep }: { rep: TRep }) => {
	const imageClass = 'size-32 border-white border-[1px] hover:cursor-pointer rounded-md ';
	return (
		<div className='size-full flex flex-col items-start justify-start rounded-md gap-4'>
			{/* Reputation detail */}
			<div className='p-4 w-full h-[5.5rem] flex flex-row items-start justify-between bg-base-200/50 rounded-lg'>
				<div className='flex flex-row gap-4'>
					{/* Users  */}
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
					{/* Title & keywords */}
					<div>
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

			{/* Log Details */}
			<div
				role='tablist'
				className='tabs tabs-lifted tabs-lg w-full h-2/5 flex flex-col items-start justify-start bg-base-200/50 rounded-lg'>
				<div role='tab' className='tab tab-active w-fit '>
					Log Description
				</div>
				<div className='size-full pt-4 pb-12 '>
					{/* Description */}
					<div className='w-full h-full overflow-y-scroll overflow-x-hidden px-4 '>
						<p className='font-normal text-lg whitespace-pre-line'>{rep.log.description}</p>
					</div>
				</div>
			</div>

			{/* Evidence */}
			<div
				role='tablist'
				className='tabs tabs-lifted tabs-lg w-full h-2/5  flex flex-col items-start justify-start bg-base-200/50 rounded-lg'>
				<div role='tab' className='tab tab-active w-fit '>
					Evidence
				</div>
				<div className='size-full overflow-y-hidden flex flex-row justify-between items-start gap-10 px-4 pt-4'>
					{/* Image */}
					<div className='w-2/3 flex flex-row items-start justify-start gap-4 overflow-y-hidden overflow-x-scroll'>
						<div className={`${imageClass}`}></div>
						<div className={`${imageClass}`}></div>
						<div className={`${imageClass}`}></div>
					</div>
					{/* Files */}
					<div className='w-1/3 flex flex-row items-start justify-start gap-4 overflow-y-hidden overflow-x-scroll'>
						<div className={`${imageClass}`}></div>
						<div className={`${imageClass}`}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Log;
