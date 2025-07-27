import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import Button from '../components/reusable/Button';
import Work from '../components/projects/Work';

const Home = () => {
	return (
		<div className="mx-auto w-full">

			<AppBanner></AppBanner>
			<Work />
			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div>
		</div>
	);
};

export default Home;
