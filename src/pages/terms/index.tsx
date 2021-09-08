import Head from 'next/head';
import { useRouter } from 'next/router';

const Terms = () => {
  const router = useRouter();
  return (
    <div className=''>
      <Head>
        <title>NewsClub</title>
        <meta name='description' content='shortener link' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Terms
    </div>
  );
};

Terms.Layout = 'dashboard';

export default Terms;
