/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export const OurClients = () => {
  return (
    <div className='text-center'>
      <p className='text-[22px]'>Our Clients</p>
      <h2 className='text-center text-[45px] max-w-[600px] text-[#ff5521] mx-auto font-bold'>
        We believe each client is a long term partnership
      </h2>
      <div className='py-[80px] max-w-[980px] mx-auto grid grid-cols-5 gap-4'>
        <img src='/clients/oak-hills.webp' alt='client' width={100} />
        <img src='/clients/hotel.webp' alt='client' width={100} />
        <img src='/clients/nest-medical.webp' alt='client' width={100} />
        <img src='/clients/shawns.webp' alt='client' width={100} />
        <img src='/clients/latch.webp' alt='client' width={100} />
        <img src='/clients/tocket.webp' alt='client' width={100} />
        <img src='/clients/makeofit.webp' alt='client' width={100} />
        <img src='/clients/right.webp' alt='client' width={100} />
        <img src='/clients/powerr.webp' alt='client' width={100} />
        <img src='/clients/demotive.webp' alt='client' width={100} />
      </div>
    </div>
  );
};
