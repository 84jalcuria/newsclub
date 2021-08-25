import Link from 'next/link';
import UserNameInput from '@/components/pages/common/usernameinput';
import PasswordInput from '@/components/pages/common/passwordinput';
import SignInButton from '@/components/common/authbutton';

const SignInCard = () => {
  return (
    <div className='w-full max-w-md bg-white px-3 sm:px-5 py-10 shadow-2xl rounded-md'>
      <form action='' className='flex flex-col space-y-7'>
        <h1 className='capitalize text-gray-800 text-base md:text-xl font-medium self-center mb-2'>
          Login and go on
        </h1>
        <UserNameInput placeholder={'Username'} />
        <PasswordInput placeholder={'Password'} />
        <Link href='/sign-up'>
          <a
            href='#'
            className='self-start text-gray-800 text-xs sm:text-sm font-bold tracking-normal  underline ml-1'
          >
            I have not a account
          </a>
        </Link>
        <SignInButton label={'login'} />
      </form>
    </div>
  );
};

export default SignInCard;
