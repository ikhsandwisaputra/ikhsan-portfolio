import AboutMeBio from '../components/about/AboutMeBio';

import { motion } from 'framer-motion';
import Resume from '../components/resume2/Resume';
const About = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto sm:pt-0 pt-10"
			>
				<AboutMeBio />
			</motion.div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto sm:pt-0 pt-32"
			>
				<Resume />

			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				{/* <AboutClients /> */}
			</motion.div>
		</>
	);
};

export default About;
