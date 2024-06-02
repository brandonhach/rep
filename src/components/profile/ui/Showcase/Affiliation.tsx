import { AffiliationConfig } from '@/config/site-config';
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const Affiliation = ({ params, affiliations }: any) => {
	const session = useSession();
	return (
		<div className='w-full h-full overflow-x-auto'>
			<div className='grid auto-cols-[21.8rem] grid-flow-col gap-4 p-4'>
				{AffiliationConfig.Affiliation.map((item, index) => {
					return (
						<div key={index} className='row-span-1 m-4 rounded-xl relative overflow-hidden'>
							<div className='flex flex-col justify-center items-center pt-2'>
								<div className='flex items-center justify-center'>
									<div className='avatar'>
										<div className='w-36 mask mask-squircle'>
											<Image className='object-cover' src={`${item.serviceImage}`} alt='' fill />
										</div>
									</div>
								</div>
								<div className='flex flex-col items-center justify-center gap-1 pt-4'>
									<h4 className='text-xs badge badge-outline border-white rounded-xl badge-md'>
										{item.service}
									</h4>
									<h3 className='text-pre'>{item.role}</h3>
									<h1 className='font-bold text-2xl'>{item.affiliationTitle}</h1>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Affiliation;
