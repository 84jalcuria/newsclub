import { useEffect } from 'react';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { useSession } from '@/utils/providers/sessionContextProvider';
import { useRouter } from 'next/router';
import Title from '@/components/common/pagetitle';
import ShortenerCard from '@/pages/dashboard/shortener/components/shortenercard';
import { motion } from 'framer-motion';

const Shortener = () => {
  const t = useTranslations('dashboard-shortener');
  const router = useRouter();
  const { state: sessionState } = useSession();

  useEffect(() => {
    if (!sessionState?.session) router.replace('/sign-in');
  }, [sessionState]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='h-full  flex flex-col justify-between  items-center p-[18px] sm:p-[25px]'
    >
      <Head>
        <title>{t('page-title')}</title>
        <meta name='description' content='shortener link' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='self-end sm:self-start'>
        <Title label={t('title')} />
      </div>
      <div className='w-full flex-grow flex justify-center items-center'>
        <ShortenerCard />
      </div>
    </motion.div>
  );
};

Shortener.Layout = 'dashboard';

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../../../lang/${locale}.json`),
    },
  };
}

export default Shortener;
