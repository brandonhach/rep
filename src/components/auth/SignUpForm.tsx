'use client'; // Specify
import { Signup } from '@/actions/signup';
import { signUpSchema, TSignUpSchema } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

// Specify Form Schema first in @types/types.ts

const SignUpForm = () => {
	const router = useRouter();
	// React Hook Form for forms + Zod for validation
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });

	const onSubmit = async (data: TSignUpSchema) => {
		Signup(data).then(() => router.push('/login?success=Email%20sent'));
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className='w-1/3 h-1/2 flex flex-col gap-y-2'>
				{/* ...register appends input "username" into the */}
				<input {...register('username')} type='username' placeholder='Username' className='px-4 py-2 rounded' />
				{errors.username && <p className='text-red-500'>{`${errors.username.message}`}</p>}

				<input {...register('email')} type='email' placeholder='Email' className='px-4 py-2 rounded' />
				{errors.email && <p className='text-red-500'>{`${errors.email.message}`}</p>}

				<input {...register('password')} type='password' placeholder='Password' className='px-4 py-2 rounded' />
				{errors.password && <p className='text-red-500'>{`${errors.password.message}`}</p>}

				<button disabled={isSubmitting} type='submit' className='bg-blue-500 disabled:bg-gray-500 py-2 rounded'>
					Create an account
				</button>
			</form>
		</div>
	);
};

export default SignUpForm;
