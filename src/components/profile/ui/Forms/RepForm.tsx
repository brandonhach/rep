'use client';
import { addRep } from '@/actions/rep/add-rep';
import { Rep, repSchema, tab1Schema, tab2Schema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import BasicForm from './RepFormWizard/BasicForm';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import LogForm from './RepFormWizard/LogForm';
import ConfirmForm from './RepFormWizard/ConfirmForm';
import { Toaster } from 'react-hot-toast';

const RepForm = ({ params }: { params: any }) => {
	const session = useSession();

	/**
	 * Handles active tab
	 */
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

	// Toggles schema based on what tab the user is on. Currently at the end it defaults to using the repSchema.
	const [schema, setSchema] = useState(repSchema);
	useEffect(() => {
		const schemas: any = {
			0: tab1Schema,
			1: tab2Schema,
		};
		const newSchema = schemas[activeTab] || repSchema;
		// console.log(newSchema === tab2Schema ? 'tab2Schema' : 'tab1Schema');
		setSchema(newSchema);
	}, [activeTab]);

	// React-Hook-Form
	const methods = useForm<Rep>({
		resolver: zodResolver(schema),
		mode: 'onChange',
	});

	const {
		register,
		reset,
		formState: { isValid },
		trigger,
	} = methods;

	/**
	 * Server Action
	 * @param data
	 */
	const processForm: SubmitHandler<Rep> = async (data) => {
		const result = addRep(data);
		if ((await result).success) {
			reset();
		}
	};

	// For debugging & troubleshooting. Remove this from rendering for Prod.
	// const onInvalid = (errors: any) => console.error(errors);
	// console.log(methods.getValues());

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

	// Validation to disable submit button based on state of ConfirmForm.tsx
	const [isConfirmValid, setConfirmValid] = useState(false);

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
						onSubmit={methods.handleSubmit(processForm)}>
						<Toaster position='top-left' reverseOrder={false} />
						<input type='hidden' {...register('profileId')} value={params.id as string} />
						<input type='hidden' {...register('userId')} value={session.data?.user.id} />
						{activeTab === 0 && <BasicForm></BasicForm>}
						{activeTab === 1 && <LogForm></LogForm>}
						{activeTab === 2 && <ConfirmForm setConfirmValid={setConfirmValid}></ConfirmForm>}

						<div className='w-full flex flex-row items-center justify-between gap-10 pt-20'>
							<button
								className={`btn rounded-xl btn-lg flex flex-row items-center ${
									activeTab === 0 ? 'invisible duration-0' : 'hover: duration-500'
								} `}
								onClick={() => {
									handlePrevClick();
									setValidationFailed(false);
								}}
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
								className={`btn rounded-xl btn-lg text-white hover: duration-500 hover:btn-success ${
									activeTab !== 2 ? 'hidden' : ''
								}`}
								type='submit'
								onClick={() => {
									(document.getElementById('rep_modal') as HTMLDialogElement).close();
									setActiveTab(0);
								}}
								disabled={!isConfirmValid}>
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
