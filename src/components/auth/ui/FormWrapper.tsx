'use client';
import React, { ReactNode } from 'react';

const FormWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div className='w-1/2 h-5/6 flex flex-row items-center justify-center  border-amber-200/90 shadow-amber-200/50 shadow-2xl transition border-[1px] rounded-2xl'>
			{children}
		</div>
	);
};

export default FormWrapper;
