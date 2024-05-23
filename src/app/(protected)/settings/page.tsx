import { getUserById } from '@/model/user';
import { redirect } from 'next/navigation';
import Settings from '@/components/settings/Settings';

const SettingsPage = () => {
	return (
		<div className='flex flex-row w-full h-full items-center justify-center'>

			<Settings />
		</div>

	)
};

export default SettingsPage;
