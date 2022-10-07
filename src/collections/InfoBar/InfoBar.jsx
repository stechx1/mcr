import { Button } from '../../components';

export const InfoBar = ({
  subheading,
  heading,
  button,
  buttonText,
  para,
  paraText,
}) => {
  return (
    <>
      <p className='text-[22px]'>{subheading}</p>
      <div className='flex justify-between items-start'>
        <h2 className='text-[45px] max-w-[600px] text-[#ff5521] font-bold'>
          {heading}
        </h2>
        {button && <Button type={'primary'}>{buttonText}</Button>}
      </div>
      {para && <p className='py-2 max-w-[500px]'>{paraText}</p>}
    </>
  );
};
