import { useState } from 'react';
import Image from 'next/image';
import password from '@/assets/password.png';
import view from '@/assets/view.png';
import notview from '@/assets/not-view.png';

interface IProps {
  placeholder: string;
}

const PasswordInput = ({
  error,
  placeholder,
  inputRef,
  name,
  onChange,
  onBlur,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='relative'>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        ref={inputRef}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full border-2 ${
          error ? 'border-red-500' : 'border-gray-200'
        }  rounded-md py-1 sm:py-2 px-7 focus:outline-none ${
          error ? 'focus:border-red-500' : 'focus:border-gray-700'
        } 
        hover:bg-gray-100 text-gray-700 text-sm font-normal tracking-wider`}
      />
      <div className='absolute  w-5 h-5 top-[6px] sm:top-[10px] left-1'>
        <Image
          src={password}
          alt='password icon'
          layout='fill'
          objectFit='cover'
        />
      </div>
      {showPassword ? (
        <button
          type='button'
          className='absolute w-5 h-5 top-[6px] sm:top-[10px] right-2 focus:outline-none cursor-pointer'
          onClick={() => setShowPassword(!showPassword)}
        >
          <Image
            src={view}
            alt='password icon'
            layout='fill'
            objectFit='cover'
          />
        </button>
      ) : (
        <button
          type='button'
          className='absolute w-5 h-5 top-[6px] sm:top-[10px] right-2 focus:outline-none cursor-pointer'
          onClick={() => setShowPassword(!showPassword)}
        >
          <Image
            src={notview}
            alt='password icon'
            layout='fill'
            objectFit='cover'
          />
        </button>
      )}
    </div>
  );
};

export default PasswordInput;
