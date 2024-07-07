import { motion } from 'framer-motion';

const FadeIn = ({ children }: { children: React.ReactNode }) => (
	<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
		{children}
	</motion.div>
);

export default FadeIn;
