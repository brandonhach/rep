'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
	const session = useSession();
	return (
		<div className='navbar flex flex-row items-center justify-between px-8 h-24'>
			<div className='btn btn-ghost text-xl h-full flex flex-col items-center justify-center'>
				<Link href={'/'}>
					<Image alt='Logo' src={'/logo/rep.png'} width={200} height={200}></Image>
				</Link>
			</div>
			<div className='menu menu-horizontal'>
				<li>
					<Link href={'/learn'}>Learn more</Link>
				</li>
				<div className='divider divider-horizontal'></div>

				{session.status === 'authenticated' ? (
					<>
						<li>
							<Link href={'/dashboard'}>Dashboard</Link>
						</li>
						<div className='divider divider-horizontal'></div>
						<li className=''>
							<Link href={`/profile/${session.data?.user.id}`}>Profile</Link>
						</li>
						<div className='divider divider-horizontal'></div>
						<li className='btn btn-outline rounded-xl'>
							<button onClick={() => signOut()}>Logout</button>
						</li>
					</>
				) : (
					<>
						<li className='pr-8'>
							<Link href={'/login'}>Login</Link>
						</li>
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
