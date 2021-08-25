import Image from 'next/image';
import email from '@/assets/email.png';

interface IProps {
  placeholder: string;
}

const UserNameInput = ({ placeholder }: IProps) => {
  return (
    <div className='relative'>
      <input
        type='email'
        placeholder={placeholder}
        className='w-full border-2 border-gray-200 rounded-md py-1 sm:py-2 px-6 sm:px-8 focus:outline-none focus:border-gray-800
        hover:bg-gray-100 text-gray-700 text-xs sm:text-sm font-normal tracking-wider'
      />
      <div className='absolute w-4 h-3 sm:w-6 sm:h-5 top-[9px] sm:top-[10px] left-1'>
        <Image src={email} alt='email icon' layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};

export default UserNameInput;
