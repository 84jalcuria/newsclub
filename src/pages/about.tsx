import Head from 'next/head';

const About = () => {
  return (
    <div className='w-full flex-grow flex justify-center items-center'>
      <Head>
        <title>NewsClub</title>
        <meta name='description' content='shortener link' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>UNDER CONSTRUCTION</div>
    </div>
  );
};

About.Layout = 'default';

export default About;
