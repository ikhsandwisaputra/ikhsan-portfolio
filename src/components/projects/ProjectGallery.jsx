import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleProjectData.ProjectImages.map((project) => {
				return (
					<div className="mb-10 sm:mb-0 group" key={project.id}>
						{/* Scroll-on-hover preview — full-page screenshot di-scroll
						    otomatis dari top ke bottom pas hover. */}
						<div
							className="w-full aspect-[16/10] bg-cover bg-top bg-no-repeat rounded-xl shadow-lg sm:shadow-none bg-primary-light dark:bg-ternary-dark cursor-pointer transition-[background-position] duration-[5000ms] ease-linear group-hover:bg-bottom"
							style={{ backgroundImage: `url(${project.img})` }}
							role="img"
							aria-label={project.title}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
