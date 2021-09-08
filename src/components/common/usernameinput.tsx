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
        }  rounded-md py-1 px-7 focus:outline-none ${
          error ? 'focus:border-red-500' : 'focus:border-gray-800'
        } 
        hover:bg-gray-100 text-gray-700 text-sm font-normal tracking-tight bg-transparent`}
      />
      <div className='absolute w-4 h-4 top-[9px] left-2'>
        <Image src={user} alt='user icon' layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};

export default UserNameInput;
