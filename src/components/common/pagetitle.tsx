interface IProps {
  label: string;
}

const PageTitle = ({ label }: IProps) => {
  return (
    <h1 className='text-gray-800 text-lg sm:text-2xl font-bold capitalize tracking-tight'>
      {label}
    </h1>
  );
};

export default PageTitle;
