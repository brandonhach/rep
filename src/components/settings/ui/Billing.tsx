import React from 'react';
import SubscriptionCard from '../Billing/SubscriptionCard';
import Image from 'next/image';
import { SubscriptionPlansConfig } from '@/config/site-config';

const Billing = () => {
	return (
		<div className='scrollbar-hide'>
			<div className='size-full flex flex-col items-center justify-start mt-10 mb-32 scrollbar-hide'>
				<main className='flex flex-col gap-2'>
					<h1 className='font-bold text-5xl bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent text-center pb-2'>
						Boost your credibility with our plan
					</h1>
					<p className='text-center'>
						Pay once and get lifetime for the first <span className='underline'>3000 customers</span> if you
						select{' '}
						<span className='font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent'>
							PREMIUM+
						</span>
					</p>
				</main>
				<div className='w-full h-auto grid grid-rows-1 grid-cols-3 gap-4 p-4'>
					{SubscriptionPlansConfig.map((plan, index) => {
						return <SubscriptionCard plan={plan} key={index}></SubscriptionCard>;
					})}
				</div>
			</div>
			<div className='pt-20'>
				<h1 className='font-bold text-2xl'>Plans & Billing</h1>
				<div className='card w-96 bg-base-100 shadow-xl px-4 mb-10'>
					<div className='card-body'>
						<h2 className='card-title'>Bank of America Credit Card</h2>
						<p>John Doe | ****** 0231</p>
					</div>
					<figure>
						<Image
							src='https://images.unsplash.com/photo-1571715268998-d6e79bed5fc9?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt='Credit Card'
							width={400}
							height={400}
							className='rounded-xl'
						/>
					</figure>
					<div className='w-full py-4'>
						<button className='btn bg-red-900 w-1/2 rounded-xl'>Remove Card</button>
						<button className='btn bg-blue-900 w-1/2 rounded-xl'>Update Info</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Billing;
