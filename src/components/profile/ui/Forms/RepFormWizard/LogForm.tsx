import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { cToast } from './cToast';

const LogForm = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	// Type assertion for this log schema
	const logErrors = errors.log as { title?: { message?: string }; description?: { message?: string } } | undefined;

	// This is use to listen for any errors and display them as a toast using react-hot-toast
	useEffect(() => {
		if (logErrors?.title) {
			cToast(String(logErrors?.title?.message));
		}
		if (logErrors?.description) {
			cToast(String(logErrors?.description?.message));
		}
	}, [errors, logErrors?.description, logErrors?.title]);

	return (
		<div className='size-full'>
			<h1 className='text-4xl font-bold'>Logs</h1>
			<p className='text-lg pb-4'>Fill out the basic details about the transaction & experience.</p>
			<div className=' flex flex-col gap-4 items-end w-full h-full'>
				{/* Title */}
				<input
					type='text'
					placeholder='Title'
					className={`input input-bordered w-full rounded-md indicator ${
						logErrors?.title ? 'duration-700 border-error' : 'border'
					}`}
					{...register('log.title')}
				/>
				{/* description */}
				<textarea
					placeholder='Document your experience and provide transaction evidence.'
					className={`input input-bordered w-full rounded-md indicato resize-none h-32 px-4 py-2 ${
						logErrors?.description ? 'duration-700 border-error' : 'border'
					}`}
					{...register('log.description')}
				/>

				<input type='file' className='file-input file-input-ghost w-full max-w-xs' />
			</div>
		</div>
	);
};

export default LogForm;
