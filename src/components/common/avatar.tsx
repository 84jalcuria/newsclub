interface IProps {
  path?: string;
  size: number;
}

const Avatar = ({ path, size }: IProps) => {
  return (
    <div
      className='relative rounded-full overflow-hidden'
      style={{ height: size, width: size }}
    >
      <svg
        className='absolute inset-0 text-gray-400'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  );
};

export default Avatar;
