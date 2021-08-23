import Image from 'next/image';
import user from '@/assets/user.png';

const textinput = () => {
  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Username'
        className='w-full border-2 border-gray-200 rounded-md py-1 sm:py-2 px-6 sm:px-8 focus:outline-none focus:border-gray-800
        hover:bg-gray-100 text-gray-700 text-xs sm:text-sm font-normal tracking-wider'
      />
      <div className='absolute w-4 h-4 sm:w-6 sm:h-6 top-[6px] sm:top-2 left-1'>
        <Image src={user} alt='user icon' layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};

export default textinput;
