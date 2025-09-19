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
					className="font-general-medium flex items-center px-6 hover:shadow-xl border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-2 shadow-lg rounded-lg bg-ternary-light focus:ring-1 focus:ring-indigo-900 hover:bg-ternary-dark text-gray-500 hover:text-white duration-500 text-lg sm:text-xl "
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div>
		</div>
	);
};

export default Home;
