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
    if (sessionState.session) {
      router.replace('/dashboard');
    }
  }, [sessionState.session]);

  return (
    <div className='w-full flex-grow flex flex-col space-y-5 sm:flex-row '>
      <Head>
        <title>{t('page-title')}</title>
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

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../lang/${locale}.json`),
    },
  };
}

export default SignIn;
