import React from 'react';
import { lorem } from '@/config/site-config';

const ConfirmForm = () => {
	return (
		<div className='size-full'>
			<h1 className='text-4xl font-bold'>Confirmation</h1>
			<p className='text-lg pb-4'>Fill out the basic details about the transaction & experience.</p>
			<form className=' flex flex-col gap-4 items-end w-full h-full'>
				{/* description */}
				<div className='flex flex-col gap-4 items-end w-full h-1/2 border-[1px] border-white overflow-auto py-2 px-4 rounded-md'>
					<p>{lorem}</p>
				</div>
				<label className='label cursor-pointer '>
					<span className='label-text'>I understand the term of service.</span>
					<input type='checkbox' defaultChecked className='checkbox' />
				</label>
			</form>
		</div>
	);
};

export default ConfirmForm;
