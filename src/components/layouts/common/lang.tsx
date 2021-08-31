interface IProps {
  onCallback: () => void;
  label: string;
}

const Lang = ({ onCallback, label }: IProps) => {
  return (
    <button
      type='button'
      onClick={onCallback}
      className='focus:outline-none rounded-md bg-green-500 py-1 px-2'
    >
      <h1 className='text-white uppercase text-sm'>{label}</h1>
    </button>
  );
};

export default Lang;
