import { useEffect } from 'react';
import Head from 'next/head';
import Wellcome from '@/components/common/wellcome';
import SignUpCard from '@/pages/sign-up/components/signupcard';
import { useSession } from 'utils/providers/sessionContextProvider';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const SignUp = () => {
  const t = useTranslations('sign-up');
  const router = useRouter();
  const { state: sessionState } = useSession();

  useEffect(() => {
    if (sessionState?.session) router.replace('/dashboard/overview');
  }, [sessionState]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='h-full flex justify-around items-center flex-wrap py-10'
    >
      <Head>
        <title>{t('page-title')}</title>
        <meta name='description' content='SignUp page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wellcome />
      <SignUpCard />
    </motion.div>
  );
};

SignUp.Layout = 'dashboard';

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../../lang/${locale}.json`),
    },
  };
}

export default SignUp;
