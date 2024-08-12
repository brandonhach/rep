import toast from 'react-hot-toast';
import { VscError } from 'react-icons/vsc';

export function cToast(msg: string) {
	toast(msg, {
		icon: <VscError className='text-xl text-error' />,
		style: {
			borderRadius: '10px',
			background: '#171717',
			color: '#fff',
		},
	});
}
