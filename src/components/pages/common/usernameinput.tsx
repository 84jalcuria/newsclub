import React from 'react';
import Image from 'next/image';
import user from '@/assets/user.png';

interface IProps {
  placeholder: string;
}

const UserNameInput = ({
  error,
  placeholder,
  onChange,
  onBlur,
  name,
  inputRef,
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
        }  rounded-md py-1 sm:py-2 px-7 sm:px-9 focus:outline-none ${
          error ? 'focus:border-red-500' : 'focus:border-gray-800'
        } 
        hover:bg-gray-100 text-gray-700 text-sm sm:text-base font-normal tracking-wider`}
      />
      <div className='absolute w-5 h-5 sm:w-6 sm:h-6 top-[6px] sm:top-[9px] left-1'>
        <Image src={user} alt='user icon' layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};

export default UserNameInput;
