'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiProfileLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import { MdOutlineSearch } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
	const session = useSession();
	const pathname = usePathname();
	return (
		<div className='flex flex-row items-center justify-between px-8 h-14 mt-2 w-screen z-50'>
			<div className=' text-xl h-full flex flex-col items-center justify-center'>
				<Link href={'/'}>
					<Image alt='Logo' src={'/logo/rep.png'} width={150} height={150}></Image>
				</Link>
			</div>
			<div className='menu menu-horizontal w-fit'>
				{session.status === 'authenticated' ? (
					<div className='flex flex-row'>
						{pathname !== '/' && (
							<>
								<label className='input input-bordered flex items-center gap-2 rounded-xl'>
									<input type='text' className='grow' placeholder='Search profile...' />
									<MdOutlineSearch />
								</label>
							</>
						)}

						<div className='dropdown pl-4'>
							<div
								tabIndex={0}
								role='button'
								className='flex flex-row justify-center items-center w-fit gap-2 min-w-40'>
								<div className='avatar'>
									<div className='w-fit rounded-full'>
										<Image
											src={`${session.data.user.image}`}
											height={48}
											width={48}
											alt='avatar'></Image>
									</div>
								</div>
								<h1>{`${session.data.user.name}`}</h1>
								<IoIosArrowDown />
							</div>
							<ul
								tabIndex={0}
								className='menu menu-sm dropdown-content z-[1] shadow rounded-box w-full bg-black'>
								<li>
									<Link href={'/dashboard'}>
										<MdOutlineDashboard /> Dashboard <span className='badge'>New</span>
									</Link>
								</li>
								<li>
									<Link href={`/profile/${session.data?.user.id}`}>
										<RiProfileLine />
										Profile
									</Link>
								</li>
								<li>
									<Link href={'/settings'}>
										<IoSettingsOutline />
										Settings
									</Link>
								</li>
								<li>
									<div onClick={() => signOut()}>
										<IoIosLogOut />
										Logout
									</div>
								</li>
							</ul>
						</div>
					</div>
				) : (
					<>
						<Link
							href={'/signup'}
							className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-50'>
							<span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f59e0b_0%,#fef3c7_50%,#d97706_100%)]' />
							<span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-neutral-900/90 duration-700'>
								<p className='text-xs px-2'>Get Started</p>
							</span>
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
