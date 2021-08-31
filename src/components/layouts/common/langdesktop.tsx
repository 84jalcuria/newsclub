interface IProps {
  onCallback: () => void;
  label: string;
}

const LangDesktop = ({ onCallback, label }: IProps) => {
  return (
    <button
      type='button'
      onClick={onCallback}
      className='focus:outline-none rounded-full bg-green-500 w-7 h-7 
      flex justify-center items-center transform hover:scale-105 ease-linear duration-150'
    >
      <h1 className='text-white text-xs uppercase font-medium'>{label}</h1>
    </button>
  );
};

export default LangDesktop;
