import { useEffect } from 'react';
import Head from 'next/head';
import Logo from '@/components/common/logo';
import { useRouter } from 'next/router';
import { useLang } from '@/context/lang-context';

const Home = () => {
  const { lang } = useLang();
  const router = useRouter();

  useEffect(() => {
    if (lang) router.replace('/sign-in', '/sign-in', { locale: lang });
  }, [lang]);

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Head>
        <title>NewsClub</title>
        <meta name='description' content='shortener link' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='animate-pulse'>
        <Logo size={100} />
      </div>
    </div>
  );
};

Home.Layout = 'none';

export default Home;
