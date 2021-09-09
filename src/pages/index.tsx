import { useEffect } from 'react';
import Head from 'next/head';
import Logo from '@/components/common/logo';
import { useRouter } from 'next/router';
import { useLang } from 'utils/providers/langContextProvider';
import { useSession } from 'utils/providers/sessionContextProvider';

const Home = () => {
  const { state: sessionState } = useSession();
  const { lang } = useLang();
  const router = useRouter();

  useEffect(() => {
    if (lang && sessionState) {
      if (sessionState.session) {
        router.replace('/dashboard/overview', '/dashboard/overview', {
          locale: lang,
        });
      } else {
        router.replace('/sign-in', '/sign-in', { locale: lang });
      }
    }
  }, [lang, sessionState]);

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

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../lang/${locale}.json`),
    },
  };
}

export default Home;
