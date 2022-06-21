import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import data from 'sections/services-offered/data';

const packages = {
  
  annual: [
    
    {
      id: 2,
      name: 'Business king',
      description: 'For Enterprise business',
      priceWithUnit: '1000$',
      buttonText: 'Lets Work ',
      anotherOption: 'Or Give us an Email to discuss further details work with your budget',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'eCommerce Store',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: 'Suggested',
      headerIcon: <IoIosCheckmarkCircle />,
      name: 'Business Builder',
      description: 'For Businesses',
      priceWithUnit: '$500',
      buttonText: 'Lets Workt',
      anotherOption: 'Or Give us An email!',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'eCommerce Store',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder ',
          isAvailable: true,
        },
      ],
    },
  ],
};

export default packages;