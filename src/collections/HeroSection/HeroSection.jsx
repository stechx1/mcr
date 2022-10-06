import { Button } from '../../components';

export const HeroSection = () => {
  return (
    <div>
      <h1 className='text-[110px] text-white font-extrabold leading-tight'>
        Building a concrete future
      </h1>
      <p className='text-white text-[40px]'>
        Honest, Reliable Builders since 1968
      </p>
      <div className='flex space-x-4 pt-5'>
        <Button type='primary'>View Projects</Button>
        <Button>Contact Us</Button>
      </div>
    </div>
  );
};
