'use client';

import { MdCompareArrows } from 'react-icons/md';

const RepButton = () => {
	const handleRepButton = () => {
		(document.getElementById('rep_modal') as HTMLDialogElement).showModal();
	};

	return (
		<button className='btn btn-outline rounded-xl' onClick={handleRepButton}>
			Rep
			<MdCompareArrows className='text-amber-200' />
		</button>
	);
};

export default RepButton;
