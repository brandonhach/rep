'use client';
import { addRep } from '@/actions/rep/add-rep';
import { Rep, repSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import BasicForm from './RepFormWizard/BasicForm';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import LogForm from './RepFormWizard/LogForm';

const RepForm = ({ params }: { userId: string; params: any }) => {
	const session = useSession();
	const [activeTab, setActiveTab] = useState(0);
	const handlePrevClick = () => {
		setActiveTab((prevTab) => (prevTab > 0 ? prevTab - 1 : prevTab));
	};

	const handleNextClick = () => {
		setActiveTab((prevTab) => (prevTab < 3 ? prevTab + 1 : prevTab));
	};

	const methods = useForm<Rep>({
		resolver: zodResolver(repSchema),
		mode: 'onChange',
	});

	const { register, reset } = methods;

	const processForm: SubmitHandler<Rep> = async (data) => {
		addRep(data);
	};
	const onInvalid = (errors: any) => console.error(errors);

	return (
		<FormProvider {...methods}>
			<div className='size-full flex flex-col items-center justify-center'>
				<div className='w-full h-full flex flex-row items-center justify-evenly p-4'>
					<ul className='steps steps-vertical gap-4 pb-4'>
						<li className={`step  ${activeTab >= 0 ? 'step-success' : ''}`}>Your details</li>
						<li className={`step  ${activeTab >= 1 ? 'step-success' : ''}`}>Detailed Log</li>
						<li className={`step  ${activeTab >= 2 ? 'step-success' : ''}`}>Confirmation</li>
					</ul>
					<form
						className={'flex flex-col items-center justify-center w-1/2 h-3/4'}
						onSubmit={methods.handleSubmit(processForm, onInvalid)}>
						<input type='hidden' {...register('profileId')} value={params.id} />
						<input type='hidden' {...register('userId')} value={session.data?.user.id} />
						{activeTab === 0 && <BasicForm></BasicForm>}
						{activeTab === 1 && <LogForm></LogForm>}

						<div className='w-full flex flex-row items-center justify-between gap-10 pt-20'>
							<button
								className={`btn-outline rounded-xl btn-lg flex flex-row items-center ${
									activeTab === 0 ? 'invisible duration-0' : 'hover: duration-500'
								} `}
								onClick={handlePrevClick}>
								<GrFormPrevious />
								Prev
							</button>
							<button
								className={`btn-outline rounded-xl btn-lg flex flex-row items-center ${
									activeTab === 2 ? 'invisible hover: duration-0' : ' hover: duration-500'
								}`}
								onClick={handleNextClick}>
								Next <GrFormNext />
							</button>
							<button
								className={`btn-outline rounded-xl btn-lg text-white hover: duration-500 hover:btn-success `}
								hidden={activeTab !== 2}
								type='submit'
								onClick={() => {
									(document.getElementById('rep_modal') as HTMLDialogElement).close();
									setActiveTab(0);
									reset();
								}}>
								Submit form
							</button>
						</div>
					</form>
				</div>
			</div>
		</FormProvider>
	);
};

export default RepForm;
