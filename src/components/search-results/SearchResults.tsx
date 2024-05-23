'use client';
import React from 'react';
import { LuBadgeCheck, LuBadge, LuBadgeX, LuBadgeAlert } from "react-icons/lu";
import Flag from 'react-world-flags';

const SearchResults = () => {
  const placeholderUserResults = [
    {
      badge: LuBadgeCheck,
      badgeColor: "text-green-400",
      status: "Safe",
      username: "BruceW213",
      name: "Bruce Wayne",
      countryCode: "us",
    },
    {
      badge: LuBadgeX,
      badgeColor: "text-red-600",
      status: "Unsafe",
      username: "Maji-Chan45",
      name: "Goro Majima",
      countryCode: "jp",
    },
    {
      badge: LuBadgeAlert,
      badgeColor: "text-yellow-500",
      status: "Ongoing investigation",
      username: "Daigo20",
      name: "Daigo Dojima",
      countryCode: "jp",
    },
    {
      badge: LuBadge,
      badgecolor: "text-gray-400",
      status: "No reputation status",
      username: "Kiryu-Chan",
      name: "Kazuma Kiryu",
      countryCode: "jp",
    },
  ];
  
  return (
    <div className='col-span-3 mx-2 w-4/5'>
      <h1 className='text-amber-200/90 text-3xl text-center'>Search for people</h1>
      <p className='text-white text-center mb-4'>Search the Rep community for other people</p>
      {/*Search bar to search for users*/}
      <label className="input input-bordered flex items-center gap-2 rounded-2xl">
        <input type="text" className="grow" placeholder="Search for people" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      </label>
      {/*Individuals heading and top pagination and dropdown menus*/}
      <div className='flex justify-between items-center'>
        <p className='text-lg mt-4 font-bold text-white'>Individuals</p>
        <div className='flex items-center'>
          {/*/Sort by Nationality*/}
          <div className="collapse collapse-arrow bg-base-200 mt-2 mr-2 w-30">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Nationality
            </div>
            <div className="collapse-content">
              <p>United States of America</p>
              <p>Japan</p>
            </div>
          </div>
          {/*Sort Alphabetically Dropdown*/}
          <div className="collapse collapse-arrow bg-base-200 mt-2 mr-2 w-30">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Sort by Relevance
            </div>
            <div className="collapse-content">
              <p>Sort Alphabetically Ascending</p>
              <p>Sort Alphabetically Descending</p>
            </div>
          </div>
        <div className="join mt-2">
          <button className="join-item btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn btn-disabled">...</button>
          <button className="join-item btn">99</button>
          <button className="join-item btn">100</button>
        </div>
        </div>
      </div>
      {/*Placeholder example for user results*/}
      <div className='flex flex-col mt-2'>
        {placeholderUserResults.map((user, index) => (
          <div key={index} className='flex w-full mb-2'>
            <div className='w-1/4 flex flex-col justify-center items-center border border-amber-200/90'>
              <p className='text-lg font-bold text-white text-center'>Reputation Status</p>
              <user.badge size={70} className={user.badgeColor} />
              <p className='text-center text-white'>{user.status}</p>
            </div>
            <div className='w-3/4 flex border border-amber-200/90'>
              <div className="avatar px-2 py-2">
                <div className="w-24 rounded-xl">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className='flex flex-col justify-center'>
                <p className="font-bold">{user.username}</p>
                <p>{user.name}</p>
                <Flag code={user.countryCode} height="60" width="60" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-lg font-bold text-white'>Individuals</p>
        <div className="join">
        <button className="join-item btn">1</button>
        <button className="join-item btn">2</button>
        <button className="join-item btn btn-disabled">...</button>
        <button className="join-item btn">99</button>
        <button className="join-item btn">100</button>
      </div>
      </div>
    </div>
  )
};

export default SearchResults;
