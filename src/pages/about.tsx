import Head from 'next/head';

const About = () => {
  return (
    <div className='w-full flex-grow flex justify-center items-center'>
      <Head>
        <title>About</title>
        <meta name='description' content='shortener link' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>UNDER CONSTRUCTION</div>
    </div>
  );
};

About.Layout = 'default';

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../lang/${locale}.json`),
    },
  };
}

export default About;
