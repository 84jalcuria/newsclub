import { useEffect } from 'react';
import Head from 'next/head';
import Wellcome from '@/components/pages/common/wellcome';
import SignInCard from '@/components/pages/sign-in/signincard';
import { useSession } from '@/context/session-context';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

const SignIn = () => {
  const router = useRouter();
  const { state: sessionState } = useSession();
  const t = useTranslations('sign-in');

  useEffect(() => {
    if (sessionState?.session) {
      router.replace('/dashboard');
    }
  }, [sessionState]);

  return (
    <div className='w-full flex-grow flex flex-col space-y-5 sm:flex-row '>
      <Head>
        <title>{t('page-title')}</title>
        <meta name='description' content='SignIn page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className=' relative sm:flex-1 flex justify-center items-center'>
        <div
          className='absolute top-10 sm:top-20 -left-1 bg-green-300 w-48 h-48 sm:w-64 sm:h-64
           rounded-full mix-blend-multiply filter  blur-2xl opacity-50 animate-blob'
        ></div>
        <div
          className='absolute top-10 sm:top-20 right-12 bg-purple-400 w-40 h-40 sm:w-64 sm:h-64 sm:right-10
          rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000'
        ></div>
        <div
          className='absolute top-28 sm:top-44 left-12 bg-green-300 w-44 h-44 sm:w-64 sm:h-64 sm:left-6
          rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000'
        ></div>
        <Wellcome />
      </div>
      <div className=' flex-grow sm:flex-1 flex justify-end items-center'>
        <SignInCard />
      </div>
    </div>
  );
};

SignIn.Layout = 'default';

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../lang/${locale}.json`),
    },
  };
}

export default SignIn;
