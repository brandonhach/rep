import React from 'react';

const Showcase = () => {
	return (
		<div className='w-full h-full'>
			<div role='tablist' className='tabs tabs-lifted'>
				<a role='tab ' className='tab tab-active'>
					Moodboard
				</a>
				<a role='tab' className='tab '>
					Achievements
				</a>
				<a role='tab' className='tab'>
					Posts
				</a>
			</div>
		</div>
	);
};

export default Showcase;
