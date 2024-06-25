import { auth } from '@/auth';
import InnerProgress from '@/components/onboarding/InnerProgress';

const Onboarding = async () => {
	const session = await auth();

	return (
		<div className='h-screen w-screen'>
			<InnerProgress session={session}></InnerProgress>
		</div>
	);
};

export default Onboarding;
