import Head from 'next/head';
import { useTranslations } from 'next-intl';
import UnderConstruccion from '@/components/common/underconstruction';
import Title from '@/components/common/pagetitle';
import { motion } from 'framer-motion';

const Contact = () => {
  const t = useTranslations('contact');
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='h-full  flex flex-col justify-between  items-center p-[25px]'
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
        <UnderConstruccion />
      </div>
    </motion.div>
  );
};

Contact.Layout = 'dashboard';

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../../lang/${locale}.json`),
    },
  };
}

export default Contact;
