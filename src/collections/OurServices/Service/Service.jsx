import Image from "next/image";

export const Service = ({icon, title}) => {
  return (
    <div className="flex flex-col bg-white p-10 justify-start items-start">
      <Image src={icon} alt={`${icon} icon`} width={65} height={65} />
      <p className="pt-4 text-[22px]">{title}</p>
    </div>
  );
};


