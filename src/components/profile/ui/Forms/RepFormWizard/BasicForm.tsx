'use client';
import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FaRegTrashCan } from 'react-icons/fa6';
import { IoIosAdd } from 'react-icons/io';
import { cToast } from '../../../../ui/cToast';

const BasicForm = () => {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext();

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'keywords',
		rules: {
			required: 'Please append at least 1 item',
		},
	});

	// Append the dynamic input on initial view.
	useEffect(() => {
		if (fields.length === 0) {
			append('');
		}
	}, [fields, append]);

	// This is use to listen for any errors and display them as a toast using react-hot-toast
	useEffect(() => {
		if (errors.rating) {
			cToast(String(errors.rating.message));
		}
		if (errors.description) {
			cToast(String(errors.description.message));
		}
		if (errors.keywords) {
			if (Array.isArray(errors.keywords)) {
				errors.keywords.forEach((error, index) => {
					if (error?.message) {
						cToast(`Keyword #${index + 1}: ${error.message}`);
					}
				});
			} else {
				cToast(String(errors.keywords.message));
			}
		}
	}, [errors]);

	return (
		<div className='size-full'>
			<h1 className='text-4xl font-bold'>Your details</h1>
			<p className='text-lg pb-2'>Fill out the basic details about the transaction & experience.</p>
			<div className='px-2 flex flex-col gap-4 items-end w-full h-full'>
				{/* Rating*/}
				<div
					className={`flex flex-row gap-4 border-[1px] p-2 rounded-lg ${
						errors.rating ? 'duration-700 border-error' : 'border-none'
					}`}>
					<div className='form-control'>
						<label className='label cursor-pointer'>
							<span className='label-text text-xl font-semibold pr-4'>+rep</span>
							<input
								type='radio'
								value={'true'}
								className='radio checked:bg-green-500'
								{...register('rating')}
							/>
						</label>
					</div>
					<div className='form-control'>
						<label className='label cursor-pointer'>
							<span className='label-text text-xl font-semibold pr-4'>-rep</span>
							<input
								type='radio'
								value={'false'}
								className='radio checked:bg-red-500'
								{...register('rating')}
							/>
						</label>
					</div>
				</div>
				{/* description */}
				<label className='form-control w-full flex flex-row '>
					<input
						type='text'
						placeholder='Enter a short sentence summarizing this transaction'
						className={`input input-bordered w-full rounded-md indicator ${
							errors.description ? 'duration-700 border-error' : 'border'
						}`}
						{...register('description')}
					/>
				</label>

				{/* KeywordList */}
				<div className='w-full grid grid-cols-2 auto-rows-auto gap-4'>
					{/* How in the world do you type this??? React Hook Form FieldError idk. */}
					{fields.map((field, index) => {
						return (
							<div className='flex flex-row gap-1' key={field.id}>
								<input
									type='text'
									className={`input input-bordered min-w-44 w-44 rounded-md ${
										errors.keywords &&
										Array.isArray(errors.keywords) &&
										errors.keywords[index]?.message
											? 'duration-700 border-error'
											: 'border'
									}`}
									placeholder={`Keyword #${index + 1}`}
									{...register(`keywords.${index}`, { required: true })}
								/>
								{index === fields.length - 1 && fields.length < 5 && (
									<button type='button' className='btn rounded-xl' onClick={() => append('')}>
										<IoIosAdd className='text-xl' />
									</button>
								)}

								{fields.length > 1 && (
									<button
										type='button'
										className='btn rounded-xl text-neutral-300'
										onClick={() => remove(index)}>
										<FaRegTrashCan className='text-xl' />
									</button>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default BasicForm;
