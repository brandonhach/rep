import { editProfileData } from '@/actions/profile-card/edit-profilecard';

const ProfileForm = ({ profileInfo }: { profileInfo: any }) => {
	return (
		<div>
			<form className='px-2 flex flex-col gap-4 items-end size-full' action={editProfileData}>
				<input type='hidden' name='id' value={profileInfo.userId} />
				<label className='form-control w-full'>
					<span className='label-text'>Profile Description</span>
					<textarea
						className='textarea textarea-bordered w-full h-24 resize-none rounded-xl whitespace-pre-line'
						name='description'
						defaultValue={profileInfo.description}
						placeholder='Enter profile description'></textarea>
				</label>
				<label className='form-control w-full'>
					<span className='label-text'>Background Image URL</span>
					<input
						type='text'
						className='input input-bordered w-full rounded-xl'
						name='backgroundImage'
						defaultValue={profileInfo.backgroundImage}
						placeholder='Enter background image URL'
					/>
				</label>
				<button
					className='btn btn-outline rounded-xl btn-sm'
					type='submit'
					onClick={() => {
						(document.getElementById('profileEdit_modal') as HTMLDialogElement).close();
					}}>
					Save Changes
				</button>
			</form>
		</div>
	);
};

export default ProfileForm;
