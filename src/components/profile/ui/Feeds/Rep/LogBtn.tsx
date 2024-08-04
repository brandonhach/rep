'use client';
import { IoDocumentTextOutline } from 'react-icons/io5';

const LogButton = () => {
	const handleLogButton = () => {
		(document.getElementById('log_modal') as HTMLDialogElement).showModal();
	};

	return (
		<button className='btn rounded-xl indicator' data-tip='Click to view logs' onClick={handleLogButton}>
			<span className='indicator-item badge badge-primary badge-xs rounded-xl z-0'>Logs</span>
			<IoDocumentTextOutline className='text-2xl  ' />
		</button>
	);
};

export default LogButton;
