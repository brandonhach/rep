import { addRep } from '@/actions/rep/add-rep';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Link from 'next/link';
import BasicForm from './RepForm/BasicForm';
import LogForm from './RepForm/LogForm';
import ConfirmForm from './RepForm/ConfirmForm';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { repSchema } from '@/types/schema';

const RepForm = ({ userId, params }: { userId: string; params: any }) => {
	const session = useSession();
	// https://dev.to/okafor__mary/how-to-dynamically-add-input-fields-on-button-click-in-reactjs-5298

	const [activeTab, setActiveTab] = useState(0);
	const handlePrevClick = () => {
		setActiveTab((prevTab) => (prevTab > 0 ? prevTab - 1 : prevTab));
	};

	const handleNextClick = () => {
		setActiveTab((prevTab) => (prevTab < 3 ? prevTab + 1 : prevTab));
	};

	const methods = useForm({
		resolver: zodResolver(repSchema),
		mode: 'onChange',
	});

	return (
		<FormProvider {...methods}>
			<div className='size-full flex flex-col items-center justify-center'>
				<div className='w-full h-full flex flex-row items-center justify-evenly p-4'>
					<ul className='steps steps-vertical gap-4 pb-4'>
						<li className={`step  ${activeTab >= 0 ? 'step-success' : ''}`}>Your details</li>
						<li className={`step  ${activeTab >= 1 ? 'step-success' : ''}`}>Detailed Log</li>
						<li className={`step  ${activeTab >= 2 ? 'step-success' : ''}`}>Confirmation</li>
					</ul>
					<form className='flex flex-col items-center justify-center w-1/2 h-3/4' action={addRep}>
						{activeTab === 0 && <BasicForm params={params}></BasicForm>}
						{activeTab === 1 && <LogForm></LogForm>}
						{activeTab === 2 && <ConfirmForm></ConfirmForm>}

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
								hidden={activeTab !== 2}>
								<Link href={`/profile/`}>I agree</Link>
							</button>
						</div>
					</form>
				</div>
			</div>
		</FormProvider>
	);
};

export default RepForm;
