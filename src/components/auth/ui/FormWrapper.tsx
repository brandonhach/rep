'use client';
import React, { ReactNode } from 'react';

const FormWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div className='w-1/2 h-5/6 border-white border-2 flex flex-row items-center justify-center'>{children}</div>
	);
};

export default FormWrapper;
