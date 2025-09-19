export default function ProjectHeader() {
	const { title, description } = project;
  return (
    <>
      <p className='font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7'>
        {title}
      </p>
      {/* <h1>{title}</h1> */}
      <p>{description}</p>
      {/* Tampilkan informasi detail proyek lainnya */}
    </>
  );
}
