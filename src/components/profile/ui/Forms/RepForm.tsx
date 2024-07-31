import { addRep } from '@/actions/rep/add-rep';
import { useSession } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';

const RepForm = ({ userId, params }: { userId: string; params: any }) => {
	const session = useSession();
	// https://dev.to/okafor__mary/how-to-dynamically-add-input-fields-on-button-click-in-reactjs-5298
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

	return (
		<div className='w-full h-1/2'>
			<form className='px-2 flex flex-col gap-4 items-end w-full h-full' action={addRep}>
				<input type='hidden' name='profileId' value={params.id} />
				<input type='hidden' name='userId' value={session.data?.user.id} />
				{/* Rating*/}
				<div className='form-control'>
					<label className='label cursor-pointer'>
						<span className='label-text'>+rep</span>
						<input
							type='radio'
							name='rating'
							value={'true'}
							className='radio checked:bg-green-500'
							defaultChecked
						/>
					</label>
				</div>
				<div className='form-control'>
					<label className='label cursor-pointer'>
						<span className='label-text'>-rep</span>
						<input type='radio' name='rating' value={'false'} className='radio checked:bg-red-500' />
					</label>
				</div>
				{/* description */}
				<label className='form-control w-full'>
					<textarea
						className='textarea textarea-bordered w-full h-24 resize-none rounded-xl whitespace-pre-line'
						name='description'
						placeholder='Description'></textarea>
				</label>

				{/* KeywordList */}
				<div className='w-full flex flex-col items-center justify-center gap-4'>
					{keywords.map((keyword, index) => (
						<div className='input_container' key={index}>
							<input
								type='text'
								value={keyword}
								onChange={(event) => handleChange(event, index)}
								className='input input-bordered w-full rounded-xl'
								placeholder={`Keyword ${index + 1}`}
							/>
							{index === keywords.length - 1 && keywords.length < 5 && (
								<button
									type='button'
									className='btn btn-sm rounded-xl'
									onClick={() => handleAddKeyword()}>
									Add
								</button>
							)}
							{keywords.length > 1 && (
								<button
									type='button'
									className='btn btn-sm btn-error rounded-xl'
									onClick={() => handleDeleteKeyword(index)}>
									Delete
								</button>
							)}
						</div>
					))}
				</div>
				<input type='hidden' name='keywords' value={keywords.filter((k) => k.trim() !== '').join(',')} />

				<button
					className='btn btn-outline rounded-xl btn-sm'
					type='submit'
					onClick={() => {
						(document.getElementById('rep_modal') as HTMLDialogElement).close();
					}}>
					Save Changes
				</button>
			</form>
		</div>
	);
};

export default RepForm;
