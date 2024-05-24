'use client';
import React, { ReactNode } from 'react';

const ProfileWrapper = ({ children }: {children: ReactNode}) => {
    return (
        <div className="flex justify-center py-8">
            {children}
        </div>
    );
};

export default ProfileWrapper;