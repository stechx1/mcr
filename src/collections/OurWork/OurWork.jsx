import { Button } from '../../components';
import { Commercial } from './Commerical/Commercial';

export const OurWork = () => {
  return (
    <div>
      <p className='text-[22px]'>Building is what we do</p>
      <div className='flex justify-between items-start'>
        <h2 className='text-[45px] max-w-[600px] text-[#ff5521] font-bold'>
          MCR Construction Is Leading Quality Projects
        </h2>
        <Button type={'primary'}>Read More</Button>
      </div>
      <Commercial />
    </div>
  );
};
