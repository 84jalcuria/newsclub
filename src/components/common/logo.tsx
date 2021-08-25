interface IProps {
  size: number;
}

const Logo = ({ size }: IProps) => {
  return (
    <div
      className='sm:w-14 sm:h-14 rounded-full bg-gray-800'
      style={{ height: size, width: size }}
    ></div>
  );
};

export default Logo;
