import Image from 'next/image';
const UploadAvatar = ({ session }: { session: any }) => {
	return (
		<div className='size-full flex flex-col items-center justify-center'>
			<div className='text-center rounded-xl pb-16'>
				<h1 className='text-4xl font-semibold pb-2'>Upload avatar.</h1>
				<p>Add a personal touch to your profile by uploading a photo.</p>
			</div>
			<div className='w-1/2 h-1/2 flex flex-col items-center justify-center gap-4'>
				<div className='avatar'>
					<div className='w-48 rounded-full ring ring-black ring-offset-black ring-offset-8'>
						<Image height={128} width={128} src={`${session.user.image}`} alt='' />
					</div>
				</div>
				<h1 className='font-bold text-4xl pt-3 hover:cursor-default'>{session.user.name} 🇺🇸</h1>
				<div>
					<input type='file' className='file-input file-input-bordered w-full' />
				</div>
			</div>
		</div>
	);
};

export default UploadAvatar;
