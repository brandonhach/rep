'use client';

import { MdModeEdit } from "react-icons/md";

const EditProfileButton = () => {
    const handleEditProfileCard = () => {
        (document.getElementById('profileEdit_modal') as HTMLDialogElement).showModal();
    };

    return (
        <button className='btn btn-outline rounded-xl' onClick={handleEditProfileCard}>
            Edit
            <MdModeEdit className='text-amber-200' />
        </button>
    );
};

export default EditProfileButton;