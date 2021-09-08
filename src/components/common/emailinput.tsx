import Image from 'next/image';
import email from '@/assets/email.png';

interface IProps {
  placeholder: string;
}

const UserNameInput = ({
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
          error ? 'border-red-500' : 'border-gray-200'
        }  rounded-md py-1 px-7 focus:outline-none ${
          error ? 'focus:border-red-500' : 'focus:border-gray-800'
        } 
        hover:bg-gray-100 text-gray-700 text-sm font-normal tracking-tight bg-transparent`}
      />
      <div className='absolute w-4 h-3 top-[11px] left-2'>
        <Image src={email} alt='email icon' layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};

export default UserNameInput;
