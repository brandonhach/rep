import React from 'react';
import { useFormContext } from 'react-hook-form';

const LogForm = () => {
	const {
		register,
		formState: { errors },
		watch,
	} = useFormContext();

	// Type assertion for this log schema
	const logErrors = errors.log as { title?: { message?: string }; description?: { message?: string } } | undefined;

	return (
		<div className='size-full'>
			<h1 className='text-4xl font-bold'>Logs</h1>
			<p className='text-lg pb-4'>Fill out the basic details about the transaction & experience.</p>
			<div className=' flex flex-col gap-4 items-end w-full h-full'>
				{/* Title */}
				{logErrors?.title?.message && (
					<p className='text-sm text-red-400'>{String(logErrors?.title?.message)}</p>
				)}
				<input
					type='text'
					placeholder='Title'
					className='input input-bordered w-full rounded-md indicator'
					{...register('log.title')}
				/>
				{/* description */}
				{logErrors?.description?.message && (
					<p className='text-sm text-red-400'>{String(logErrors?.description?.message)}</p>
				)}
				<textarea
					placeholder='Document your experience and provide transaction evidence.'
					className='input input-bordered w-full rounded-md indicato resize-none h-32 px-4 py-2'
					{...register('log.description')}
				/>

				<input type='file' className='file-input file-input-ghost w-full max-w-xs' />
			</div>
		</div>
	);
};

export default LogForm;
