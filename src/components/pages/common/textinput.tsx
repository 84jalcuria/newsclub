import Image from 'next/image';
import user from '@/assets/user.png';

interface IProps {
  placeholder: string;
}

const TextInput = ({
  error,
  placeholder,
  inputRef,
  name,
  onChange,
  onBlur,
}) => {
  return (
    <div className='relative'>
      <input
        type='text'
        placeholder={placeholder}
        name={name}
        ref={inputRef}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full border-2 ${
          error ? 'border-red-500' : 'order-gray-200'
        } b rounded-md py-1 sm:py-2 px-6 sm:px-8 focus:outline-none ${
          error ? 'focus:border-red-500' : 'focus:border-gray-800'
        } 
        hover:bg-gray-100 text-gray-700 text-xs sm:text-sm font-normal tracking-wider`}
      />
      <svg
        className='absolute w-4 h-4 sm:w-6 sm:h-6 top-[6px] sm:top-2 left-1 text-gray-400'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={3}
          d='M5 13l4 4L19 7'
        />
      </svg>
    </div>
  );
};

export default TextInput;

/**/

/*
    <div className='absolute w-4 h-4 sm:w-6 sm:h-6 top-[6px] sm:top-2 left-1'>
        <Image src={user} alt='user icon' layout='fill' objectFit='cover' />
      </div>

*/
