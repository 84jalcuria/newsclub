import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from '@/components/common/logo';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace('/sign-in');
    }, 5000);
  }, []);
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Head>
        <title>NewsClub</title>
        <meta name='description' content='shortener link' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='animate-pulse'>
        <Logo size={70} />
      </div>
    </div>
  );
};

Home.Layout = 'none';

export default Home;
