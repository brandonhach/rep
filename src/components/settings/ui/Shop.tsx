import React from 'react';

const Shop = () => {
	const boxStyle = 'flex items-center justify-center border border-white border-[2[1px] w-full h-44 rounded-md';
	return (
		<div className='size-full flex flex-col gap-4'>
			<h1 className='font-bold text-2xl'>Shop</h1>
			<ul className='menu menu-vertical lg:menu-horizontal rounded-xl'>
				<li>
					<a>Popular this month</a>
				</li>
				<li>
					<a>New themes</a>
				</li>
				<li>
					<a>Showcase Upgrades</a>
				</li>
				<li>
					<a>Moodboard Upgrades</a>
				</li>
			</ul>
			<div className='size-full bg-base-200/50 flex flex-row justify-between rounded-xl'>
				<div className='size-full grid grid-cols-4 auto-rows-auto gap-8'>
					<div className={`${boxStyle}`}>
						<h1></h1>
					</div>
					<div className={`${boxStyle}`}>
						<h1></h1>
					</div>
					<div className={`${boxStyle}`}>
						<h1></h1>
					</div>
					<div className={`${boxStyle}`}>
						<h1></h1>
					</div>
					<div className={`${boxStyle}`}>
						<h1></h1>
					</div>
					<div className={`${boxStyle}`}>
						<h1></h1>
					</div>
					<div className={`${boxStyle}`}>
						<h1></h1>
					</div>
					<div className={`${boxStyle}`}>
						<h1></h1>
					</div>
				</div>
			</div>
			<div className='join'>
				<button className='join-item btn'>1</button>
				<button className='join-item btn btn-active'>2</button>
				<button className='join-item btn'>3</button>
				<button className='join-item btn'>4</button>
			</div>
		</div>
	);
};

export default Shop;
