'use client';
import { login } from '@/actions/login';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/route';
import { TSignInSchema, signInSchema } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import FormWrapper from './ui/FormWrapper';
import { FcGoogle } from 'react-icons/fc';
import { BsDiscord } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowGoBackFill } from 'react-icons/ri';

const SignInForm = () => {
	const onClick = (provider: 'google' | 'discord') => {
		signIn(provider, {
			callbackURL: DEFAULT_LOGIN_REDIRECT,
		});
	};
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TSignInSchema>({ resolver: zodResolver(signInSchema) });

	return (
		<div className='w-full h-full flex flex-row items-center justify-center'>
			<FormWrapper>
				<div className='relative w-1/2 h-full flex flex-col items-center justify-center px-10'>
					<Image alt={'Elephant'} src={'/logo/rep.png'} width={250} height={250}></Image>
				</div>
				<div className='divider lg:divider-horizontal'></div>
				<div className='relative w-1/2 h-full flex flex-col items-center justify-center gap-2 pb-16 px-10'>
					<form action={login} className='w-full h-fit flex flex-col gap-y-4'>
						<h1 className='text-2xl font-semibold'>The faster you fill up, the faster you go.</h1>

						<label className='relative input input-bordered flex items-center gap-2'>
							<MdEmail />
							<input
								{...register('email')}
								type='email'
								placeholder='Email'
								className='px-4 py-2 rounded'
							/>
							{errors.email && (
								<p className='absolute right-4 text-red-500 text-xs font-semibold'>{`${errors.email.message}`}</p>
							)}
						</label>
						<button disabled={isSubmitting} type='submit' className='btn hover:bg-neutral-800/95'>
							Continue
						</button>
					</form>
					<div className='divider w-full'>OR</div>
					<div className='w-full'>
						<button
							className='btn btn-ghost px-4 py-2 rounded-sm w-1/2'
							onClick={() => {
								onClick('google');
							}}>
							<FcGoogle /> Continue with Google
						</button>
						<button
							className='btn btn-ghost px-4 py-2 rounded-sm w-1/2'
							onClick={() => {
								onClick('discord');
							}}>
							<BsDiscord /> Continue with Discord
						</button>
					</div>
					<div className='absolute bottom-10'>
						<h1 className='text-neutral-500 flex flex-row items-center gap-2'>
							Return to homepage
							<span>
								{' '}
								<Link
									href={'/'}
									className='text-amber-300 font-bold hover:underline hover:text-amber-200/90 '>
									<RiArrowGoBackFill />
								</Link>
							</span>
						</h1>
					</div>
				</div>
			</FormWrapper>
		</div>
	);
};

export default SignInForm;
