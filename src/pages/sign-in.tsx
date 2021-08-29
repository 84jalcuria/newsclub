import { useEffect } from 'react';
import Head from 'next/head';
import Wellcome from '@/components/pages/common/wellcome';
import SignInCard from '@/components/pages/sign-in/signincard';
import { useSession } from '@/context/session-context';
import { useRouter } from 'next/router';

const SignIn = () => {
  const router = useRouter();
  const { state: sessionState } = useSession();

  useEffect(() => {
    if (sessionState.session) {
      console.log(sessionState.session);
      router.replace('/dashboard');
    }
  }, [sessionState.session]);

  return (
    <div className='w-full flex-grow flex flex-col space-y-5 sm:flex-row '>
      <Head>
        <title>Sign In</title>
        <meta name='description' content='SignIn page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className=' sm:flex-1 flex justify-center items-center'>
        <Wellcome />
      </div>
      <div className=' flex-grow sm:flex-1 flex justify-end items-center'>
        <SignInCard />
      </div>
    </div>
  );
};

SignIn.Layout = 'default';

export default SignIn;
