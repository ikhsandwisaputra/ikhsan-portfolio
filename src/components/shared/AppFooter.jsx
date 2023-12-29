import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiInstagram,
	FiYoutube,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	// {
	// 	id: 1,
	// 	icon: <FiGlobe />,
	// 	url: 'https://www.stoman.me/',
	// },
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/ikhsandwisaputra',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/ikhsan-dwi-saputra-339482297/',
	},
	{
		id: 3,
		icon: <FiInstagram />,
		url: 'https://www.instagram.com/ikhsandwisaputraafreepalestine/',
	},
	{
		id: 5,
		icon: <FiYoutube />,
		url: 'https://www.youtube.com/@ikhsandwisaputratif',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-0 sm:pt-20   mt-16 border-t-2 border-primary-light dark:border-secondary-dark sm:pb-5 pb-28">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Find Me On
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
