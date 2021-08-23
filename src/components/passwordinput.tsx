import { useState } from 'react';

import Image from 'next/image';
import password from '@/assets/password.png';
import view from '@/assets/view.png';
import notview from '@/assets/not-view.png';

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='relative'>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder='Password'
        className='w-full border-2 border-gray-200 rounded-md py-1 sm:py-2 px-6 sm:px-8 focus:outline-none focus:border-gray-700
          hover:bg-gray-100 text-gray-700 text-xs sm:text-sm font-normal tracking-wider'
      />
      <div className='absolute  w-4 h-4 sm:w-6 sm:h-6 top-[6px] sm:top-2 left-1'>
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
          className='absolute w-4 h-4 sm:w-6 sm:h-6 top-[6px] sm:top-2 right-2 focus:outline-none cursor-pointer'
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
          className='absolute w-4 h-4 sm:w-6 sm:h-6 top-[6px] sm:top-2 right-2 focus:outline-none cursor-pointer'
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
