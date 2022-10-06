export const Button = ({ onClick, type, children }) => {
  if (type === 'primary') {
    return (
      <button
        className='text-black border-2 border-[#ff5521] bg-[#ff5521] px-10 py-4 hover:text-[#ff5521] hover:bg-black hover:border-2 hover:border-[#ff5521]'
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button className='bg-transparent border-2 border-white px-10 py-4 text-white hover:border-[#ff5521] hover:bg-[#ff5521] hover:text-black' onClick={onClick}>
        {children}
      </button>
    );
  }
};
