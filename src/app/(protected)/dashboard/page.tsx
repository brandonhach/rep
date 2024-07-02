import { auth } from '@/auth';

const Dashboard = async () => {
	const session = await auth();

	return <div>dashboard</div>;
};

export default Dashboard;
