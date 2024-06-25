import React from 'react';

const Plan = () => {
	return (
		<div className='size-full flex flex-col items-center justify-center'>
			<div className='text-center rounded-xl'>
				<h1 className='text-4xl font-semibold pb-2'>Select a Plan That Fits You</h1>
				<p>Choose a subscription plan that best suits your needs.</p>
			</div>
			<div className='w-1/2 h-1/2 flex flex-col items-center justify-center gap-4'>
				<select className='select select-bordered w-full rounded-xl'>
					<option disabled selected>
						Country
					</option>
					<option>US</option>
					<option>Canada</option>
				</select>
			</div>
		</div>
	);
};

export default Plan;
