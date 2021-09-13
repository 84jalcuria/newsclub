import { useEffect, useState } from 'react';
import Head from 'next/head';
import Wellcome from '@/components/common/wellcome';
import SignInCard from '@/pages/sign-in/components/signincard';
import SendEmailCard from '@/pages/sign-in/components/sendemailcard';
import ChangePasswordCard from '@/pages/sign-in/components/changepasswordcard';
import { useSession } from 'utils/providers/sessionContextProvider';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const SignIn = () => {
  const router = useRouter();
  const query = useRouter().query;
  const [showSendEmail, setShowSendEmail] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [changePasswordId, setChangePasswordId] = useState('');
  const { state: sessionState } = useSession();
  const t = useTranslations('sign-in');

  useEffect(() => {
    if (sessionState?.session) {
      router.replace('/dashboard/overview');
    }
  }, [sessionState]);

  useEffect(() => {
    if (query.forgotPassword) {
      setShowSendEmail(true);
    } else {
      setShowSendEmail(false);
      if (query.changePassword && query.id) {
        console.log(query.id);
        setChangePasswordId(query.id as string);
        setShowChangePassword(true);
      } else {
        setShowChangePassword(false);
      }
    }
  }, [query]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='h-full flex justify-around items-center flex-wrap py-10'
    >
      <Head>
        <title>{t('page-title')}</title>
        <meta name='description' content='SignIn page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wellcome />
      {showSendEmail ? (
        <SendEmailCard />
      ) : showChangePassword ? (
        <ChangePasswordCard id={changePasswordId} />
      ) : (
        <SignInCard />
      )}
    </motion.div>
  );
};

SignIn.Layout = 'dashboard';

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../../lang/${locale}.json`),
    },
  };
}

export default SignIn;
