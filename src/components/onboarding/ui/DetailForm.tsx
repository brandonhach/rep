'use client';

const DetailForm = ({ session }: { session: any }) => {
	return (
		<div className='size-full flex flex-col items-center justify-center'>
			<div className='text-center rounded-xl'>
				<h1 className='text-4xl font-semibold pb-2'>Tell Us About Yourself.</h1>
				<p>Fill in your information to create your personalized profile.</p>
			</div>
			<div className='w-1/2 h-1/2 flex flex-col items-center justify-center gap-4'>
				<label className='input input-bordered flex items-center gap-2 w-full rounded-xl'>
					<input
						required
						type='text'
						className='grow'
						placeholder={`${session?.user.name}` !== 'null' ? `${session?.user.name}` : 'Name'}
						disabled={session.user.name}
					/>
				</label>
				<label className='input input-bordered flex items-center gap-2 w-full rounded-xl'>
					<input
						required
						type='text'
						className='grow'
						placeholder={`${session?.user.email}` || 'Email'}
						disabled={session.user.email}
					/>
				</label>
				<select className='select select-bordered w-full rounded-xl' required>
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

export default DetailForm;
