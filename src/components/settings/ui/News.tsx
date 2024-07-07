import React from 'react';
import Image from 'next/image';

const News = () => {
	return (
		<div className='size-full flex flex-col gap-4 p-4'>
			<div className='w-full flex flex-row gap-2'>
				<div className='badge badge-outline badge-lg rounded-xl'>Dev Blog</div>
				<div className='badge badge-outline badge-lg  rounded-xl'>07/07/2024</div>
				<div className='badge badge-outline badge-lg  rounded-xl'>Brandon Hach</div>
			</div>
			<div className='w-3/4'>
				<h1 className='text-4xl font-semibold'>Embracing Change: A Guide to Adapting in Today&apos;s World</h1>
				<p className='text-lg pt-4'>
					Technological advancements continue to reshape industries and daily life. Embrace new technologies
					by staying curious and proactive in learning. From artificial intelligence to blockchain, staying
					informed about emerging technologies can open doors to new career opportunities and ways of living.
				</p>
			</div>
			<div className='divider'></div>
			<div className='flex flex-row gap-8'>
				<Image
					src={`https://images.unsplash.com/photo-1511845241939-402489d3d670?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
					height={500}
					width={500}
					alt='avatar'></Image>
			</div>
		</div>
	);
};

export default News;
