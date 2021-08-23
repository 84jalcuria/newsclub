import type { NextPage } from 'next';
import Head from 'next/head';
import Wellcome from '@/components/wellcome';
import SignInCard from '@/components/signincard';

const SignIn = () => {
  return (
    <div className='w-full flex-grow flex flex-col space-y-5 sm:flex-row '>
      <Head>
        <title>NewsClub</title>
        <meta name='description' content='shortener link' />
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

/**/
