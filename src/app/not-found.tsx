'use client';
import Link from 'next/link';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1724601805363.json';
import Navbar from '@/components/ui/Navbar';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center min-h-screen relative overflow-hidden'>
        <div className='z-10 relative flex flex-col items-center justify-center'>
          <h1 className='text-9xl font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent'>404</h1>
          <p className='text-3xl font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent mt-5 mb-5'>Page Not Found.</p>
          <p className='text-xl font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent mb-5'> Sorry, we can't find the page you're looking for.</p>
          <Link href="/">
            <button className='text-black font-bold text-lg bg-gradient-to-r from-amber-200 via-yellow-300 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-200/50 shadow-lg shadow-amber-300/50 rounded-3xl px-6 py-6 w-64'>Return Home</button>
          </Link>
        </div>
        <div className='absolute inset-0 flex items-center justify-center z-0'>
          <Lottie
            className='w-[85vw] h-[80vh] max-w-[90vw] max-h-[90vh] opacity-60'
            animationData={animationData}
            loop={true}
          />
        </div>
      </div>
    </>
  );
}