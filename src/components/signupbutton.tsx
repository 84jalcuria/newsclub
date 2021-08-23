interface IProps {
  callback: () => void;
  selected: boolean;
}

const signupbutton = ({ callback, selected }: IProps) => {
  return (
    <button
      type='button'
      onClick={callback}
      className={`focus:outline-none bg-gray-800 p-2 rounded-md hover:bg-gray-900 active:bg-gray-900
      transform hover:scale-105 duration-200 ease-linear ${
        selected ? 'border-2 border-green-500 bg-gray-400 ' : null
      }`}
    >
      <h1 className='text-white sm:text-sm  tracking-wider capitalize'>
        sign up
      </h1>
    </button>
  );
};

export default signupbutton;
