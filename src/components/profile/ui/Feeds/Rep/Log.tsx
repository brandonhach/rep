import { TLog } from '@/types/types';
import React from 'react';

const Log = ({ log }: { log: TLog }) => {
	return (
		<div>
			<div>{log.title}</div>
			<div>{log.description}</div>
			<div></div>
		</div>
	);
};

export default Log;
