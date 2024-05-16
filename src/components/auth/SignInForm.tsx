'use client';
import { login } from '@/actions/login';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/route';
import { TSignInSchema, signInSchema } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

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
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className='w-1/3 h-1/2 flex flex-col gap-y-2'>
				<input {...register('email')} type='email' placeholder='Email' className='px-4 py-2 rounded' />
				{errors.email && <p className='text-red-500'>{`${errors.email.message}`}</p>}
				<input {...register('password')} type='password' placeholder='Password' className='px-4 py-2 rounded' />
				{errors.password && <p className='text-red-500'>{`${errors.password.message}`}</p>}

				<button disabled={isSubmitting} type='submit' className='bg-blue-500 disabled:bg-gray-500 py-2 rounded'>
					Login
				</button>
			</form>
			<button
				className='btn btn-ghost px-4 py-2 rounded'
				onClick={() => {
					onClick('google');
				}}>
				Google
			</button>
			<button
				className='btn btn-ghost px-4 py-2 rounded'
				onClick={() => {
					onClick('discord');
				}}>
				Discord
			</button>
		</div>
	);
};

export default SignInForm;
