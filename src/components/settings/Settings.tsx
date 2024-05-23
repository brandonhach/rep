'use client';
import React from 'react'
import { GoGear } from "react-icons/go";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdAccountTree } from "react-icons/md";
import { useState } from 'react';
import { FaDiscord } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
const Settings = ({ profile }: any) => {

    const [isEditing, setIsEditing] = useState(false);

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className='w-3/4 h-full px-32 gap-4'>
            <div className='flex flex-row items-center justify-center pb-2'>
                <GoGear className='text-5xl' />
                <h1 className='text-3xl font-semibold text-center'>Settings</h1>
            </div>

            <div className=' flex flex-col p-16 pb-20 border-amber-200/90 shadow-amber-200/50 shadow-2xl transition border-[2px] rounded-2xl'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-2 mt-2'>
                        <RiUserSettingsLine className='text-3xl' />
                        <h1 className='text-3xl font-semibold text-center'> General Settings</h1>
                    </div>

                    <div className="flex gap-3">
                        <button className="btn btn-outline rounded-xl" onClick={toggleEditMode} >{isEditing ? 'Cancel' : 'Edit'}</button>
                        <button className="btn btn-outline text-lime-500 hover:text-lime-500 rounded-xl">Save</button>
                    </div>
                </div>

                <div className='flex flex-row justify-between'>
                    <div className="mt-6 space-y-4">
                        <label className="input input-bordered flex items-center gap-2 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            Username:
                            <input type="text" className="w-64" placeholder="" disabled={!isEditing} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            Email:
                            <input type="text" className="grow" placeholder="" disabled={!isEditing} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            Password:
                            <input type="password" className="grow" value="" disabled={!isEditing} />

                        </label>
                        <label className="block">
                            <span className="sr-only">Choose profile photo</span>
                            <input type="file" className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-2xl file:border-0
      file:text-md file:font-semibold
      file:bg-yellow-300 file:text-white
      hover:file:bg-violet-100
    " disabled={!isEditing} />
                        </label>
                    </div>
                    <form className="flex items-center">
                        <div className="shrink-0">
                            <img className="h-40 w-40 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
                        </div>

                    </form>
                </div>
                <div className='flex flex-row gap-2 mt-2 py-4'>
                    <MdAccountTree className='text-3xl' />
                    <h1 className='text-3xl font-semibold text-center'>Connected Accounts</h1>
                </div>
                <div className='flex flex-row gap-2'>
                    <button className="btn btn-outline rounded-xl"><FaDiscord className='text-2xl' /></button>
                    <button className="btn btn-outline rounded-xl"><FaGoogle className='text-2xl' /></button>
                    <button className="btn btn-outline rounded-xl"><FaSteam className='text-2xl' /></button>


                </div>
            </div>
        </div>
    )
}

export default Settings
