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
import { FaUser } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

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
		setError,
	} = useForm<TSignInSchema>({ resolver: zodResolver(signInSchema) });

	const onSubmit = async (data: TSignInSchema) => {
		login(data);
	};
	return (
		<div className='w-full h-full flex flex-row items-center justify-center'>
			<FormWrapper>
				<div className='relative w-full h-full flex flex-col items-center justify-center gap-2 pb-14'>
					<div className='flex flex-col items-center justify-center pb-10'>
						<Image src={'/logo/elephant.png'} width={64} height={64} alt={'elephant'}></Image>
						<h1 className='text-3xl font-semibold'>Welcome back!</h1>
						<h3 className='text-md font-thin'>The faster you fill up, the faster you go.</h3>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className='w-1/2 h-fit flex flex-col gap-y-4'>
						<label className='input input-bordered flex items-center gap-2'>
							<FaUser />
							<input
								{...register('email')}
								type='email'
								placeholder='Email'
								className='px-4 py-2 rounded'
							/>
							{errors.email && <p className='text-red-500'>{`${errors.email.message}`}</p>}
						</label>
						<label className='input input-bordered flex items-center gap-2'>
							<FaKey />
							<input
								{...register('password')}
								type='password'
								placeholder='Password'
								className='px-4 py-2 rounded'
							/>
							{errors.password && <p className='text-red-500'>{`${errors.password.message}`}</p>}
						</label>

						<button disabled={isSubmitting} type='submit' className='btn '>
							Sign In
						</button>
					</form>
					<div className='w-1/2'>
						<button
							className='btn btn-ghost px-4 py-2 rounded-sm w-1/2'
							onClick={() => {
								onClick('google');
							}}>
							<FcGoogle /> Sign in with Google
						</button>
						<button
							className='btn btn-ghost px-4 py-2 rounded-sm w-1/2'
							onClick={() => {
								onClick('discord');
							}}>
							<BsDiscord /> Sign in with Discord
						</button>
					</div>
					<div className='absolute bottom-10'>
						<p>
							Don&apos;t have an account?
							<span>
								{' '}
								<Link
									href={'/signup'}
									className='text-amber-300 font-bold hover:underline hover:text-amber-200/90'>
									Sign up!
								</Link>
							</span>
						</p>
					</div>
				</div>
			</FormWrapper>
		</div>
	);
};

export default SignInForm;
