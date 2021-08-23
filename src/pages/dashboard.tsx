import Head from 'next/head';

const Dashboard = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Head>
        <title>NewsClub</title>
        <meta name='description' content='shortener link' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>UNDER CONSTRUCTION</div>
    </div>
  );
};

Dashboard.Layout = 'dashboard';

export default Dashboard;
