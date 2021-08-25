import Head from 'next/head';
import { useRouter } from 'next/router';

const Terms = () => {
  const router = useRouter();
  return (
    <div className='w-screen h-screen flex flex-col justify-between items-center'>
      <Head>
        <title>NewsClub</title>
        <meta name='description' content='shortener link' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <button
        type='button'
        onClick={() => router.back()}
        className='focus:outline-none self-start p-4'
      >
        <svg
          className='h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>

      <div className='flex-grow flex justify-center items-center'>
        Under Construction
      </div>
    </div>
  );
};

Terms.Layout = 'none';

export default Terms;
