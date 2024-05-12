import { TSignInSchema, signInSchema } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const SignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<TSignInSchema>({ resolver: zodResolver(signInSchema) });

	const onSubmit = async (data: TSignInSchema) => {
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
			if (responseData.errors.password) {
				setError('password', {
					type: 'server',
					message: responseData.errors.password,
				});
			}

			// Standard Zod validation check
			if (errors.username) {
				setError('username', {
					type: 'server',
					message: errors.username?.message ?? 'Server error username',
				});
			} else if (errors.password) {
				setError('password', {
					type: 'server',
					message: errors.password?.message ?? 'Server error password',
				});
			}
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className='w-1/3 h-1/2 flex flex-col gap-y-2'>
				<input {...register('username')} type='username' placeholder='Username' className='px-4 py-2 rounded' />
				{errors.username && <p className='text-red-500'>{`${errors.username.message}`}</p>}
				<input {...register('password')} type='password' placeholder='Password' className='px-4 py-2 rounded' />
				{errors.password && <p className='text-red-500'>{`${errors.password.message}`}</p>}

				<button disabled={isSubmitting} type='submit' className='bg-blue-500 disabled:bg-gray-500 py-2 rounded'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default SignInForm;
