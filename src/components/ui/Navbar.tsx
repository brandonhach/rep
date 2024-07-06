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
		<div className='flex flex-row items-center justify-between px-8 h-14 mt-2 w-screen'>
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
						<li className='btn btn-outline rounded-xl'>
							<Link href={'/signup'}>Start now</Link>
						</li>
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
