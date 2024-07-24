import { useSession } from 'next-auth/react';
import React, { ChangeEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FaRegTrashCan } from 'react-icons/fa6';
import { IoIosAdd } from 'react-icons/io';

const BasicForm = ({ params }: { params: any }) => {
	const session = useSession();
	const [keywords, setKeyWords] = useState(['']);

	const handleAddKeyword = () => {
		if (keywords.length < 5) {
			setKeyWords([...keywords, '']);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
		let { value } = event.target;
		let onChangeValue = [...keywords];
		onChangeValue[index] = value;
		setKeyWords(onChangeValue);
	};

	const handleDeleteKeyword = (index: number) => {
		const newArray = [...keywords];
		newArray.splice(index, 1);
		setKeyWords(newArray);
	};

	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<div className='size-full'>
			<h1 className='text-4xl font-bold'>Your details</h1>
			<p className='text-lg'>Fill out the basic details about the transaction & experience.</p>
			<div className='px-2 flex flex-col gap-4 items-end w-full h-full'>
				<input type='hidden' name='profileId' value={params.id} />
				<input type='hidden' name='userId' value={session.data?.user.id} />
				{/* Rating*/}
				<div className='flex flex-row gap-4'>
					<div className='form-control'>
						<label className='label cursor-pointer'>
							<span className='label-text text-xl font-semibold pr-4'>+rep</span>
							<input
								type='radio'
								value={'true'}
								className='radio checked:bg-green-500'
								defaultChecked
								{...register('rating')}
							/>
						</label>
					</div>
					<div className='form-control'>
						<label className='label cursor-pointer'>
							<span className='label-text text-xl font-semibold pr-4'>-rep</span>
							<input type='radio' name='rating' value={'false'} className='radio checked:bg-red-500' />
						</label>
					</div>
				</div>
				{/* description */}
				<label className='form-control w-full flex flex-row '>
					<input
						type='text'
						placeholder='Enter a short sentence summarizing this transaction'
						name='description'
						className='input input-bordered w-full rounded-md indicator'
					/>
				</label>

				{/* KeywordList */}
				<div className='w-full grid grid-cols-2 auto-rows-auto gap-4'>
					{keywords.map((keyword, index) => (
						<div className='flex flex-row gap-1' key={index}>
							<input
								type='text'
								value={keyword}
								onChange={(event) => handleChange(event, index)}
								className='input input-bordered min-w-44 w-44 rounded-md'
								placeholder={`Keyword #${index + 1}`}
							/>
							{index === keywords.length - 1 && keywords.length < 5 && (
								<button type='button' className='btn rounded-xl' onClick={() => handleAddKeyword()}>
									<IoIosAdd className='text-xl' />
								</button>
							)}
							{keywords.length > 1 && (
								<button
									type='button'
									className='btn  rounded-xl text-neutral-300'
									onClick={() => handleDeleteKeyword(index)}>
									<FaRegTrashCan className='text-xl' />
								</button>
							)}
						</div>
					))}
				</div>
				<input type='hidden' name='keywords' value={keywords.filter((k) => k.trim() !== '').join(',')} />

				{/* <button
					className='btn btn-outline rounded-xl btn-sm'
					type='submit'
					onClick={() => {
						(document.getElementById('rep_modal') as HTMLDialogElement).close();
					}}>
					Save Changes
				</button> */}
			</div>
		</div>
	);
};

export default BasicForm;
