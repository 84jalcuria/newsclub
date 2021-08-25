import Link from 'next/link';
import UserNameInput from '@/components/pages/common/usernameinput';
import PasswordInput from '@/components/pages/common/passwordinput';
import SignUpButton from '@/components/common/authbutton';
import EmailInput from '@/components/pages/common/emailinput';
import TextInput from '@/components/pages/common/textinput';
import ReferredBy from '@/components/pages/sign-up/referredby';

const SignUpCard = () => {
  return (
    <div className='w-full max-w-md bg-white px-3 sm:px-5 pb-10 pt-6 shadow-2xl rounded-md'>
      <form action='' className='flex flex-col space-y-7'>
        <div className='w-full flex flex-col justify-center items-center space-y-3'>
          <h1 className='capitalize text-gray-800 text-base md:text-xl font-medium self-center mb-2'>
            create your account
          </h1>
          <div className='w-full self-start sm:hidden'>
            <ReferredBy />
          </div>
        </div>
        <TextInput placeholder={'Full Name'} />
        <EmailInput placeholder={'Email'} />
        <UserNameInput placeholder={'Username'} />
        <PasswordInput placeholder={'Password'} />
        <PasswordInput placeholder={'Confirm Pasword'} />
        {/*-----------------CheckBox--------------------*/}

        <div className='flex items-center ml-1'>
          <input
            type='checkbox'
            id='A3-yes'
            name='A3-confirmation'
            value='yes'
          />
          <Link href='/terms'>
            <a
              href='#'
              className='select-none ml-1 text-green-600 text-xs sm:text-sm font-semibold tracking-normal cursor-pointer underline'
            >
              Accept all terms of use
            </a>
          </Link>
        </div>

        {/*--------------------------------------------*/}

        <Link href='/sign-in'>
          <a
            href='#'
            type='button'
            className='self-start text-gray-800 text-xs sm:text-sm font-bold tracking-normal  underline ml-1'
          >
            I have a account
          </a>
        </Link>
        <SignUpButton label={'sign up'} />
      </form>
    </div>
  );
};

export default SignUpCard;
