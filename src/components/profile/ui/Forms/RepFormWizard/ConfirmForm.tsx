import React from 'react';
import { lorem } from '@/config/site-config';
import { useForm, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RepConfirm, repConfirmSchema } from '@/types/schema';

const ConfirmForm = () => {
	const {
		register,
		formState: { errors },
		watch,
	} = useForm<RepConfirm>({ resolver: zodResolver(repConfirmSchema) });
	return (
		<div className='size-full overflow-hidden'>
			<h1 className='text-4xl font-bold'>Confirmation</h1>
			<p className='text-lg pb-4'>User Reputation and Accuracy Agreement</p>
			<div className=' flex flex-col gap-4 items-end w-full h-full'>
				<div className='w-full h-1/2 overflow-y-auto px-1 whitespace-break-spaces'>
					<p>{lorem}</p>
				</div>
				<label className='label cursor-pointer gap-2'>
					{errors.accuracy?.message && (
						<p className='text-sm text-red-400'>{String(errors.accuracy.message)}</p>
					)}
					<span className='label-text'>I confirm that the information provided is accurate.</span>
					<input
						type='checkbox'
						{...register('accuracy', {
							required: 'You must confirm that the information provided is accurate.',
						})}
					/>
				</label>
				<label className='label cursor-pointer gap-2'>
					{errors.understanding?.message && (
						<p className='text-sm text-red-400'>{String(errors.understanding.message)}</p>
					)}
					<span className='label-text'>
						I understand that false information may result in account termination.
					</span>
					<input
						type='checkbox'
						{...register('understanding', {
							required: 'You must confirm that the information provided is accurate.',
						})}
					/>
				</label>
			</div>
		</div>
	);
};

export default ConfirmForm;
