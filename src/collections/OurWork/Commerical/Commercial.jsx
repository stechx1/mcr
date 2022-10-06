import Image from 'next/image';

export const Commercial = () => {
  return (
    <div className='py-[90px]'>
      <div className='flex justify-between items-center'>
        <div>
          <div className='h-[2px] w-[40px] bg-black my-2'></div>
          <h3 className='text-[30px]'>Commerical</h3>
          <div className='max-w-[500px]'>
            <p className='py-5'>
              Im a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page
            </p>
            <p>
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors.
            </p>
          </div>
        </div>
        <Image
          src='/images/commercial.webp'
          width='709px'
          height='866px'
          alt='commercial-img'
        />
      </div>
    </div>
  );
};
