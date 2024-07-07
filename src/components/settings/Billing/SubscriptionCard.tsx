import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';
import { HiMiniXMark, HiMiniCheck } from 'react-icons/hi2';
import { TPlan } from '@/types/types';

const SubscriptionCard = ({ plan }: { plan: TPlan }) => {
	return (
		<div className='size-full flex flex-col items-start justify-start p-4 bg-base-200/50 rounded-xl'>
			<div className='flex flex-col gap-6'>
				{/* Title */}
				{plan.title === 'Noob' ? (
					<span className='font-bold text-xl'>{plan.title}</span>
				) : (
					<div className='flex flex-row items-center gap-2'>
						{' '}
						<span className='font-bold text-xl bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent'>
							{plan.title}
						</span>
						<div className='badge badge-ghost badge-md rounded-xl'>{plan.badge}</div>
					</div>
				)}

				{/* Price */}
				<div>
					<h1 className='text-4xl font-bold'>
						${plan.price} <span className='text-sm text-neutral-500'>USD</span> /{' '}
						<span className='text-3xl'>{plan.duration}</span>
					</h1>
				</div>
			</div>
			<div className='pt-6'>
				<ul>
					{plan.checkList.map((item, index) => {
						return (
							<>
								<li key={index} className='flex flex-row items-center gap-2 py-1'>
									<HiMiniCheck className='text-2xl text-green-400' />
									<p className='text-start text-lg '>{item}</p>
								</li>
							</>
						);
					})}
					{plan.crossList.map((item, index) => {
						return (
							<>
								<li key={index} className='flex flex-row items-center gap-2 py-1'>
									<HiMiniXMark className='text-2xl text-red-400' />
									<p className='text-start text-lg'>{item}</p>
								</li>
							</>
						);
					})}
				</ul>
			</div>
			<div className='w-full px-4 pt-4 pb-2'>
				<button className={`btn btn-ghost w-full rounded-xl bg-base-300/70`} disabled={plan.disabled}>
					{plan.badge == 'Subscription' ? 'Coming Soon...' : 'Select Plan'}
				</button>
			</div>
		</div>
	);
};

export default SubscriptionCard;
