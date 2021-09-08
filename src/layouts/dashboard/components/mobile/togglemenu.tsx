interface IProps {
  callback: () => void;
  isOpen: boolean;
}

const ToggleMenu = ({ callback, isOpen }: IProps) => {
  return (
    <button
      type='button'
      onClick={callback}
      className={`relative w-8 h-8 rounded-full  focus:outline-none ${
        isOpen ? 'bg-green-500' : 'bg-gradient-to-r from-gray-900 to-gray-800 '
      } shadow-xl`}
    >
      <svg
        className='transform scale-75 text-white'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
          clipRule='evenodd'
        />
      </svg>
    </button>
  );
};

export default ToggleMenu;
