interface IProps {
  callback: () => void;
  selected: boolean;
  label: string;
}

const signupbutton = ({ callback, selected, label }: IProps) => {
  return (
    <button
      type='button'
      disabled={selected}
      onClick={callback}
      className={`focus:outline-none bg-gray-800 p-2 rounded-md 
       disabled:ring-2 disabled:ring-gray-800  ${
         selected
           ? 'bg-transparent shadow-2xl'
           : 'transform hover:scale-105 duration-200 ease-linear hover:bg-gray-900 active:bg-gray-900'
       }`}
    >
      <h1
        className={`${
          selected ? 'text-gray-800' : 'text-white'
        }  sm:text-sm  font-semibold tracking-wider capitalize`}
      >
        {label}
      </h1>
    </button>
  );
};

export default signupbutton;
