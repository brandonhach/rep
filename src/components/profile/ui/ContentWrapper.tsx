'use client';
import React, { ReactNode } from 'react';

const ContentWrapper = ({ children }: {children: ReactNode}) => {
    return (
        <div className="flex justify-center">
            {children}
        </div>
    );
};

export default ContentWrapper;