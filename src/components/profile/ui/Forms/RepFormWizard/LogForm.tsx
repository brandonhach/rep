import React from 'react';
import { useFormContext } from 'react-hook-form';

const LogForm = () => {
	const {
		register,
		formState: { errors },
		watch,
	} = useFormContext();
	return (
		<div className='size-full'>
			<h1 className='text-4xl font-bold'>Logs</h1>
			<p className='text-lg'>Fill out the basic details about the transaction & experience.</p>
			<div className=' flex flex-col gap-4 items-end w-full h-full'>
				{/* description */}
				<label className='form-control w-full flex flex-row pt-4'>
					<input
						type='text'
						placeholder='Enter a short sentence summarizing this transaction'
						className='input input-bordered w-full rounded-md indicator'
						{...register('title')}
					/>
					<textarea
						placeholder='Document your experience and provide transaction evidence.'
						{...register('log.summary')}
						className='input input-bordered w-full rounded-md indicato resize-none h-32 px-4 py-2'
						{...register('log.details')}
					/>
				</label>
				<input type='file' className='file-input file-input-ghost w-full max-w-xs' />
			</div>
		</div>
	);
};

export default LogForm;
