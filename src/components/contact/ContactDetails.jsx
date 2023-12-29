import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import nobara from '../../images/ANIME/code.jpg';
const contacts = [
  {
    id: 1,
    name: 'Riau, Indonesia',
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: 'ikhsandwisaputraaaa@gmail.com',
    icon: <FiMail />,
  },
  {
    id: 3,
    name: '+62 8134 4350 478',
    icon: <FiPhone />,
  },
];

const ContactDetails = () => {
  return (
	  <div className='w-full lg:w-full pt-16'>
		  <div className=' h-[150px] sm:h-[300px] w-full sm:w-[700px] mx-auto overflow-hidden  '>
			  <img src={nobara} alt="nobara" className='w-full bg-contain'/>
		  </div>
      <div className='text-left  px-6'>
        
        <h2 className='font-general-medium text-4xl font-semibold text-primary-dark dark:text-primary-light mt-12 mb-8'>
          Let's Get in Touch: Ways to Connect with Me
        </h2>
        <p className='font-xl pb-5 text-ternary-dark dark:text-ternary-light'>
          "Thanks for your interest! For feedback or questions, email me at
          ikhsandwisaputraaaa@gmail.com. I aim to reply within 24 hours. You can
          also use the contact form on my website. Connect on Instagram for
          updates and interaction. Looking forward to hearing from you!"
        </p>
        <ul className='font-general-regular w-full'>
          {contacts.map((contact) => (
            <li className='flex ' key={contact.id}>
              <i className='text-2xl text-gray-500 dark:text-gray-400 mr-4'>
                {contact.icon}
              </i>
              <span className='text-lg mb-4 text-ternary-dark dark:text-ternary-light'>
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
