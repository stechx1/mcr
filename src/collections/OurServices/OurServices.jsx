import { InfoBar } from '../InfoBar/InfoBar';
import { Service } from './Service/Service';

export const OurServices = () => {
  return (
    <div className='container mx-auto py-[90px]'>
      <InfoBar
        subheading={'Our Services'}
        heading='We Offer a Range of Services to Meet Your Needs'
        button={true}
        buttonText='Read More'
      />

      <div className='grid grid-cols-5 gap-4 pt-[90px]'>
        <Service
          icon={'/icons/commerical-icon.svg'}
          title='Commerical Construction'
        />
        <Service
          icon={'/icons/residential-icon.svg'}
          title='Residential Construction'
        />
        <Service
          icon={'/icons/preconstruction-icon.svg'}
          title='Pre-Construction'
        />
        <Service
          icon={'/icons/site-management-icon.svg'}
          title='Site Management'
        />
        <Service
          icon={'/icons/social-project-icon.svg'}
          title='Special Projects'
        />
        <Service
          icon={'/icons/infrastructure-icon.svg'}
          title='Infrastructure Construction'
        />
        <Service
          icon={'/icons/civil-engineering-icon.svg'}
          title='Civil Engineering'
        />
        <Service
          icon={'/icons/landscape-icon.svg'}
          title='Landscape Construction'
        />
      </div>
    </div>
  );
};
