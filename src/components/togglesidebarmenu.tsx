interface IProps {
  showSideBar: () => void;
}

const ToggleSidebarMenu = ({ showSideBar }: IProps) => {
  return (
    <button
      type='button'
      onClick={showSideBar}
      className='focus:outline-none bg-gray-800 px-2 py-1 rounded-md'
    >
      <svg
        className='h-5 w-5 text-white transform scale-x-125'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg>
    </button>
  );
};

export default ToggleSidebarMenu;
