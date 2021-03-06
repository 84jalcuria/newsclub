import LoadButton from '@/components/spinner/loadbutton';
interface IProps {
  label: string;
  submitting: boolean;
}

const AuthButton = ({ label, submitting }: IProps) => {
  return (
    <button
      type='submit'
      disabled={submitting}
      className={`focus:outline-none w-full bg-gradient-to-r from-gray-900 to-gray-800 p-2 rounded-md 
      hover:bg-gray-900 active:bg-gray-900
      ${
        !submitting
          ? 'transform hover:scale-105 duration-200 ease-linear'
          : null
      } `}
    >
      {submitting ? (
        <LoadButton />
      ) : (
        <h1 className='text-white text-sm font-medium tracking-tight capitalize'>
          {label}
        </h1>
      )}
    </button>
  );
};

export default AuthButton;
