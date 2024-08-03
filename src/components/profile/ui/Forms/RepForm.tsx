'use client';
import { addRep } from '@/actions/rep/add-rep';
import { Rep, repSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import BasicForm from './RepFormWizard/BasicForm';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import LogForm from './RepFormWizard/LogForm';

const RepForm = ({ params }: { userId: string; params: any }) => {
	const session = useSession();

	// Handles next and prev tab
	const [activeTab, setActiveTab] = useState(0);
	const handlePrevClick = () => {
		setActiveTab((prevTab) => (prevTab > 0 ? prevTab - 1 : prevTab));
	};

	const handleNextClick = () => {
		setActiveTab((prevTab) => (prevTab < 3 ? prevTab + 1 : prevTab));
	};

	/**
	 * Zod + React-hook-form. Since this is a wizard form, it will be initialized as methods instead of the
	 * traditional destructure version. See doc for that.
	 */

	const methods = useForm<Rep>({
		resolver: zodResolver(repSchema),
		mode: 'onChange',
	});

	const {
		register,
		reset,
		formState: { isValid },
		trigger,
	} = methods;

	const processForm: SubmitHandler<Rep> = async (data) => {
		const result = addRep(data);
		if ((await result).success) {
			reset();
		}
	};

	// For debugging & troubleshooting. Remove this from rendering for Prod.
	const onInvalid = (errors: any) => console.error(errors);

	/**
	 * Validation:
	 * Disable next btn after clicking & validation fails.
	 * Btn also reverts to !disabled if validation is fixed.
	 */
	const [validationFailed, setValidationFailed] = useState(false);

	const validateAndProceed = async () => {
		// Trigger validation for all fields
		const result = await trigger();

		if (result) {
			// If validation passes, proceed to the next tab
			setValidationFailed(false);
			handleNextClick();
		} else {
			// If validation fails, update state to disable the button
			setValidationFailed(true);
		}
	};

	useEffect(() => {
		if (isValid) {
			setValidationFailed(false);
		}
	}, [isValid]);

	console.log(methods.getValues());

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
						{/* {activeTab === 1 && <LogForm></LogForm>} */}

						<div className='w-full flex flex-row items-center justify-between gap-10 pt-20'>
							<button
								className={`btn-outline rounded-xl btn-lg flex flex-row items-center ${
									activeTab === 0 ? 'invisible duration-0' : 'hover: duration-500'
								} `}
								onClick={handlePrevClick}
								type='button'>
								<GrFormPrevious />
								Prev
							</button>
							<button
								className={`btn rounded-xl btn-lg flex flex-row items-center ${
									activeTab === 2 ? 'invisible hover: duration-0' : ' hover: duration-500'
								}`}
								onClick={validateAndProceed}
								disabled={validationFailed}
								type='button'>
								Next <GrFormNext />
							</button>
							<button
								className={`btn-outline rounded-xl btn-lg text-white hover: duration-500 hover:btn-success `}
								hidden={activeTab !== 2}
								type='submit'
								onClick={() => {
									(document.getElementById('rep_modal') as HTMLDialogElement).close();
									setActiveTab(0);
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
