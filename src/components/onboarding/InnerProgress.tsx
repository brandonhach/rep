'use client';
import Image from 'next/image';
import { useState } from 'react';
import DetailForm from './ui/DetailForm';
import UploadAvatar from './ui/UploadAvatar';
import Plan from './ui/Plan';
import FinishOnboard from './ui/FinishOnboard';
import Link from 'next/link';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const InnerProgress = ({ session }: { session: any }) => {
	const [activeTab, setActiveTab] = useState(0);
	const handlePrevClick = () => {
		setActiveTab((prevTab) => (prevTab > 0 ? prevTab - 1 : prevTab));
	};

	const handleNextClick = () => {
		setActiveTab((prevTab) => (prevTab < 3 ? prevTab + 1 : prevTab));
	};
	return (
		<div className='size-full flex flex-row items-center justify-center'>
			<div className='w-1/3 flex flex-col items-center justify-start pb-44'>
				<Image alt={'Elephant'} src={'/logo/rep.png'} width={168} height={168}></Image>
				<ul className='steps steps-vertical'>
					<li className={`step  ${activeTab >= 0 ? 'step-success' : ''}`}>Your details</li>
					<li className={`step  ${activeTab >= 1 ? 'step-success' : ''}`}>Upload an avatar</li>
					<li className={`step  ${activeTab >= 2 ? 'step-success' : ''}`}>Choose Plan</li>
					<li className={`step  ${activeTab >= 3 ? 'step-success' : ''}`}>Final Setup</li>
				</ul>
			</div>
			<div className='w-2/3 h-4/5 p-10 flex flex-col items-center justify-stretch '>
				{/* <div>{JSON.stringify(session)}</div> */}
				<div className='w-full h-4/5 flex flex-col items-center justify-center'>
					{activeTab === 0 && <DetailForm session={session}></DetailForm>}
					{activeTab === 1 && <UploadAvatar session={session}></UploadAvatar>}
					{activeTab === 2 && <Plan></Plan>}
					{activeTab === 3 && <FinishOnboard></FinishOnboard>}
				</div>
				<div className='w-2/3 h-20 flex flex-row items-center justify-between gap-10 pt-20'>
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
							activeTab === 3 ? 'invisible hover: duration-0' : ' hover: duration-500'
						}`}
						onClick={handleNextClick}>
						Next <GrFormNext />
					</button>
					<button
						className={`btn-outline rounded-xl btn-lg text-white hover: duration-500 hover:btn-success `}
						hidden={activeTab !== 3}>
						<Link href={`/profile/${session.user.id}`}>Complete your account! 🎉</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default InnerProgress;
