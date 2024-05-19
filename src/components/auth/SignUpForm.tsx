'use client'; // Specify
import { Signup } from '@/actions/signup';
import { signUpSchema, TSignUpSchema } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import FormWrapper from './ui/FormWrapper';
import { FcGoogle } from 'react-icons/fc';
import { BsDiscord } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa6';
import { signIn } from 'next-auth/react';
import { MdEmail } from 'react-icons/md';
import { DEFAULT_LOGIN_REDIRECT } from '@/route';
import Link from 'next/link';
import Image from 'next/image';

// Specify Form Schema first in @types/types.ts

const SignUpForm = () => {
	const router = useRouter();
	// React Hook Form for forms + Zod for validation
	const onClick = (provider: 'google' | 'discord') => {
		signIn(provider, {
			callbackURL: DEFAULT_LOGIN_REDIRECT,
		});
	};
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });

	const onSubmit = async (data: TSignUpSchema) => {
		Signup(data).then(() => router.push('/login?success=Email%20sent'));
	};
	return (
		<div className='w-full h-full flex flex-row items-center justify-center'>
			<FormWrapper>
				<div className='relative w-1/2 h-full flex flex-col items-center justify-center px-10'>
					<Image alt={'Elephant'} src={'/logo/elephant.png'} width={640} height={640}></Image>
				</div>
				<div className='divider lg:divider-horizontal'></div>
				<div className='relative w-1/2 h-full flex flex-col items-center justify-center gap-2 pb-16 px-10'>
					<form onSubmit={handleSubmit(onSubmit)} className='w-full h-fit flex flex-col gap-y-4'>
						<h1 className='text-3xl font-semibold'>Create Account</h1>
						<label className='relative input input-bordered flex items-center gap-2'>
							<FaUser />
							<input
								{...register('username')}
								type='username'
								placeholder='Username'
								className='px-4 py-2 rounded'
							/>
							{errors.username && (
								<p className='absolute right-4 text-red-500 text-xs font-semibold'>{`${errors.username.message}`}</p>
							)}
						</label>

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
						<label className='relative input input-bordered flex items-center gap-2'>
							<FaKey />
							<input
								{...register('password')}
								type='password'
								placeholder='Password'
								className='px-4 py-2 rounded'
							/>
							{errors.password && (
								<p className='absolute right-4 text-red-500 text-xs font-semibold'>{`${errors.password.message}`}</p>
							)}
						</label>
						<button disabled={isSubmitting} type='submit' className='btn hover:bg-neutral-800/95'>
							Sign Up
						</button>
					</form>
					<div className='divider w-full'>OR</div>
					<div className='w-full'>
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
						<p className='text-neutral-500'>
							Already haven an account?
							<span>
								{' '}
								<Link
									href={'/login'}
									className='text-amber-300 font-bold hover:underline hover:text-amber-200/90'>
									Log in!
								</Link>
							</span>
						</p>
					</div>
				</div>
			</FormWrapper>
		</div>
	);
};

export default SignUpForm;
