import TextInput from '@/components/textinput';
import PasswordInput from '@/components/passwordinput';
import SignInButton from '@/components/signinbutton';

const RegisterCard = () => {
  return (
    <div className='w-full max-w-md bg-white px-3 sm:px-5 py-10 shadow-2xl rounded-md'>
      <form action='' className='flex flex-col space-y-7'>
        <h1 className='capitalize text-gray-800 text-base md:text-xl font-medium self-center mb-2'>
          Login and go on
        </h1>
        <TextInput />
        <PasswordInput />
        <button
          type='button'
          className='self-start text-gray-800 text-xs sm:text-sm font-bold tracking-normal  underline ml-1'
        >
          I have not a account
        </button>
        <SignInButton />
      </form>
    </div>
  );
};

export default RegisterCard;
