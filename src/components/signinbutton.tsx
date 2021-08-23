import { useRouter } from 'next/router';

const SignInButton = () => {
  const router = useRouter();
  return (
    <button
      type='button'
      onClick={() => router.push('/dashboard')}
      className='focus:outline-none w-full bg-gray-800 p-2 rounded-md hover:bg-gray-900 active:bg-gray-900
      transform hover:scale-105 duration-200 ease-linear'
    >
      <h1 className='text-white text-xs sm:text-sm md:text-base tracking-wider '>
        Login
      </h1>
    </button>
  );
};

export default SignInButton;
