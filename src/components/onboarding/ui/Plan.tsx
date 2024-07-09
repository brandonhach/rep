import SubscriptionCard from '@/components/settings/Billing/SubscriptionCard';
import { SubscriptionPlansConfig } from '@/config/site-config';

const Plan = () => {
	return (
		<div className='size-full flex flex-col items-center justify-center'>
			<div className='text-center rounded-xl'>
				<h1 className='text-4xl font-semibold pb-2'>Select a Plan That Fits You</h1>
			</div>
			<div className='size-full flex flex-col items-center justify-center gap-4'>
				<div className='size-full flex flex-col items-center justify-start  scrollbar-hide'>
					<main className='flex flex-col gap-2'>
						<p className='text-center'>
							Pay once and get lifetime for the first <span className='underline'>3000 customers</span> if
							you select{' '}
							<span className='font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent'>
								PREMIUM+
							</span>
						</p>
					</main>
					<div className='w-full h-auto grid grid-rows-1 grid-cols-3 gap-4 p-4'>
						{SubscriptionPlansConfig.map((plan, index) => {
							return <SubscriptionCard plan={plan} key={index}></SubscriptionCard>;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Plan;
