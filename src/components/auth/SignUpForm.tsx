'use client'; // Specify
import { signUpSchema, TSignUpSchema } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

// Specify Form Schema first in @types/types.ts

const SignUpForm = () => {
	// Use this for redirecting to another page
	const router = useRouter();
	// React Hook Form for forms + Zod for validation
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });

	const onSubmit = async (data: TSignUpSchema) => {
		const response = await fetch('/api/user', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const responseData = await response.json();
		if (!response.ok) {
			// Custom validation for duplications
			if (responseData.errors.username) {
				setError('username', {
					type: 'server',
					message: responseData.errors.username,
				});
			}
			if (responseData.errors.email) {
				setError('email', {
					type: 'server',
					message: responseData.errors.email,
				});
			}

			// Standard Zod validation check
			if (errors.username) {
				setError('username', {
					type: 'server',
					message: errors.username?.message ?? 'Server error username',
				});
			} else if (errors.email) {
				setError('email', {
					type: 'server',
					message: errors.email?.message ?? 'Server error email',
				});
			}
		} else {
			try {
				router.push('/dashboard');
			} catch (error) {
				console.log('Registration failed', errors);
			}
		}
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
					Submit
				</button>
			</form>
		</div>
	);
};

export default SignUpForm;
