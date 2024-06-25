import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Verify = () => {
	return (
		<div className='h-screen w-screen flex flex-col items-center justify-center'>
			<Image alt={'Elephant'} src={'/logo/elephant.png'} width={168} height={168}></Image>
			<div className='text-center p-8 bg-base-200 rounded-xl'>
				<h1 className='text-2xl font-semibold pb-2'>Check your email inbox.</h1>
				<h1 className='text-lg'>You should receive a magic link to login momentarily.</h1>
			</div>
			<div className='flex flex-row items-center justify-center gap-8 pt-8 w-full'>
				<Link href={'/login'} className='rounded-xl flex flex-row items-center hover:underline gap-2'>
					<IoIosArrowRoundBack className='text-2xl' />
					Change email
				</Link>
				<Link href={'/'} className='rounded-xl flex flex-row items-center hover:underline gap-2'>
					Get support
					<MdOutlineArrowOutward />
				</Link>
			</div>
		</div>
	);
};

export default Verify;
