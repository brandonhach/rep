import { AffiliationConfig } from '@/config/site-config';
import React from 'react';
import Image from 'next/image';

const Affiliation = () => {
	return (
		<div className='size-full grid grid-cols-3 grid-rows-1 overflow-auto pl-8'>
			{AffiliationConfig.Affiliation.map((item, index) => {
				return (
					<div
						key={index}
						className='col-span-1 row-span-1 m-4 rounded-xl relative overflow-y-hidden overflow-x-auto'>
						<div className='size-full flex flex-col justify-center items-center pt-2'>
							<div className='size-full flex flex-row items-center justify-center'>
								<div className='avatar-group -space-x-6 rtl:space-x-reverse'>
									<div className='avatar'>
										<div className='w-36'>
											<Image
												className='object-cover rounded-t-xl'
												src={`${item.serviceImage}`}
												alt=''
												fill
											/>
										</div>
									</div>
								</div>
							</div>
							<div className='size-full flex flex-col items-center justify-center gap-1'>
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
	);
};

export default Affiliation;
