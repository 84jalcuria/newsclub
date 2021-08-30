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
    if (sessionState.session) router.replace('/dashboard');
  }, [sessionState.session]);

  return (
    <div className='w-full flex-grow flex flex-col space-y-5 sm:flex-row sm:py-16'>
      <Head>
        <title>{t('page-title')}</title>
        <meta name='description' content='SignUp page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='sm:flex-1 flex flex-col justify-center items-center'>
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
