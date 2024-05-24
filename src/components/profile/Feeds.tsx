import React from 'react';

const Feeds = () => {
	return (
		<div className='w-full h-full'>
			<div role='tablist' className='tabs tabs-lifted'>
				<a role='tab' className='tab'>
					Rep
				</a>
				<a role='tab' className='tab tab-active'>
					Comments
				</a>
				<a role='tab' className='tab'>
					Follows
				</a>
				<a role='tab' className='tab'>
					Contacts
				</a>
			</div>
		</div>
	);
};

export default Feeds;
