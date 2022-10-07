import { ProGallery } from 'pro-gallery';
import { Gallery } from '../../components/Gallery/Gallery';
import { New } from '../../components/New/New';
import { InfoBar } from '../InfoBar/InfoBar';

export const OurProjects = () => {
  return (
    <div className='container mx-auto'>
      <InfoBar
        subheading={'What We Do'}
        heading='Our Projects'
        para={true}
        paraText='Im a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.'
      />
      <div className='py-[60px]'>
        <New />
      </div>
    </div>
  );
};
