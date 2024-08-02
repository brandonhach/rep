'use client';
import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FaRegTrashCan } from 'react-icons/fa6';
import { IoIosAdd } from 'react-icons/io';

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

	useEffect(() => {
		if (fields.length === 0) {
			append('');
		}
	}, [fields, append]);

	return (
		<div className='size-full'>
			<h1 className='text-4xl font-bold'>Your details</h1>
			<p className='text-lg'>Fill out the basic details about the transaction & experience.</p>
			<div className='px-2 flex flex-col gap-4 items-end w-full h-full'>
				{/* Rating*/}
				<div className='flex flex-row gap-4'>
					<div className='form-control'>
						<label className='label cursor-pointer'>
							<span className='label-text text-xl font-semibold pr-4'>+rep</span>
							<input
								type='radio'
								value={'true'}
								className='radio checked:bg-green-500'
								{...register('rating')}
								defaultChecked
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
					{errors.description?.message && (
						<p className='text-sm text-red-400'>{String(errors.description.message)}</p>
					)}
					<input
						type='text'
						placeholder='Enter a short sentence summarizing this transaction'
						className='input input-bordered w-full rounded-md indicator'
						{...register('description')}
					/>
				</label>

				{/* KeywordList */}
				<div className='w-full grid grid-cols-2 auto-rows-auto gap-4'>
					{errors.keywords?.root?.message && (
						<p className='text-sm text-red-400'>{String(errors.keywords.message)}</p>
					)}
					{fields.map((field, index) => {
						return (
							<section key={field.id}>
								<div className='flex flex-row gap-1' key={index}>
									<input
										type='text'
										className='input input-bordered min-w-44 w-44 rounded-md'
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
							</section>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default BasicForm;
