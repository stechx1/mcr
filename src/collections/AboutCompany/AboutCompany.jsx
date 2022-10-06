import Image from 'next/image';
import { Stats } from './Stats/Stats';

export const AboutCompany = () => {
  return (
    <div className=' bg-fixed bg-center bg-cover company-img'>
      <div className='bg-black bg-opacity-50 pb-[90px]'>
        <div className='container mx-auto pt-[80px]'>
          <p className='text-[22px] text-white'>Who We Are</p>
          <h3 className='text-[45px] text-[#ff5521] font-bold'>
            About Our Company
          </h3>
          <p className='text-white max-w-[500px]'>
            Im a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know more about you.
          </p>
          <div className='flex my-8 space-x-12'>
            <Stats number={1968} title='Year of Establishment' />
            <Stats number={282} title='Projects Completed' />
            <Stats number={150} title='Professional Employees' />
            <Stats number={35} title='Business Partners' />
          </div>
          <div>
            <Image
              src={'/images/sign.webp'}
              alt='sign'
              width='209px'
              height='80px'
            />
            <p className='text-[22px] text-white'>Aaron Masterson</p>
            <p className='text-white'>CEO MCR Construction</p>
          </div>
        </div>
      </div>
    </div>
  );
};
