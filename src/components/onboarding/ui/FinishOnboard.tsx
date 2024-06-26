import Image from 'next/image';

const FinishOnboard = () => {
	return (
		<div className='size-full flex flex-col items-center justify-center'>
			<div className='text-center rounded-xl flex flex-col items-center'>
				<h1 className='text-4xl font-semibold pb-2'>You&apos;re all set!</h1>
				<p className='w-3/4'>
					This is just the beginning. Continue to build and enhance your reputation to reflect your true self!
				</p>
			</div>
			<div className='w-1/2 h-1/2 flex flex-col items-center justify-center gap-4'>
				<Image alt={'Elephant'} src={'/logo/elephant.png'} width={628} height={628}></Image>
			</div>
		</div>
	);
};

export default FinishOnboard;
