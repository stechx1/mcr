export const Stats = ({number, title}) => {
  return (
    <div>
      <h3 className="text-white text-[60px] font-bold">{number}</h3>
      <p className="text-white text-[16px]">{title}</p>
      <div className='h-[2px] w-[40px] bg-white my-3'></div>
    </div>
  );
};
