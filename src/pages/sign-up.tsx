import { useEffect } from 'react';
import Head from 'next/head';
import Wellcome from '@/components/pages/common/wellcome';
import SignUpCard from '@/components/pages/sign-up/signupcard';
import ReferredByCard from '@/components/pages/sign-up/referredbycarddesktop';
import { useSession } from '@/context/session-context';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

const SignUp = () => {
  const t = useTranslations('sign-up');
  const router = useRouter();
  const { state: sessionState } = useSession();

  useEffect(() => {
    if (sessionState?.session) router.replace('/dashboard');
  }, [sessionState]);

  return (
    <div className='w-full flex-grow flex flex-col space-y-5 sm:flex-row sm:py-16'>
      <Head>
        <title>{t('page-title')}</title>
        <meta name='description' content='SignUp page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='relative sm:flex-1 flex flex-col justify-center items-center'>
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
        <div className='self-start hidden sm:block w-[80%] max-w-md mt-16'>
          <ReferredByCard
            fullname={'Renier Gonzales Gonzales'}
            email={'reyGonzales@gmail.com'}
          />
        </div>
      </div>
      <div className=' flex-grow sm:flex-1 flex justify-end items-center'>
        <SignUpCard />
      </div>
    </div>
  );
};

SignUp.Layout = 'default';

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../lang/${locale}.json`),
    },
  };
}

export default SignUp;
