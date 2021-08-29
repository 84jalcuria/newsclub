import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession, SignOut } from '@/context/session-context';

const Dashboard = () => {
  const router = useRouter();
  const { state: sessionState, dispatch: sessionDispatch } = useSession();

  useEffect(() => {
    if (!sessionState.session) router.replace('/sign-in');
  }, [sessionState.session]);

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Head>
        <title>Dashboard</title>
        <meta name='description' content='shortener link' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/*--------------------Content------------------------*/}
      <div className='flex flex-col justify-center items-center space-y-8'>
        {/*-----------------------SignOut Button----------------------------*/}
        <h1 className='mb-5 text-gray-800 text-xl sm:text-2xl font-bold capitalize'>
          dashboard
        </h1>
        <button
          type='button'
          onClick={() => SignOut(sessionDispatch)}
          className='focus:outline-none bg-gray-800 p-2 rounded-md 
        transform hover:scale-105 duration-200 ease-linear hover:bg-gray-900 active:bg-gray-900'
        >
          <h1 className='text-xs sm:text-sm  text-white font-semibold tracking-wider capitalize'>
            LogOut
          </h1>
        </button>
        {/*---------------------User Profile Card-----------------------*/}
        <div className='flex flex-col justify-center items-start p-3 bg-white rounded-md shadow-2xl'>
          <h1 className='text-xs sm:textsm text-gray-400 font-light'>
            name:
            <span className='ml-1 text-gray-700 text-sm sm:text-base font-medium '>
              {sessionState.session?.fullName}
            </span>
          </h1>
          <h1 className='text-xs sm:textsm text-gray-400 font-light'>
            username:
            <span className='ml-1 text-gray-700 text-sm sm:text-base font-medium '>
              {sessionState.session?.userName}
            </span>
          </h1>
          <h1 className='text-xs sm:textsm text-gray-400 font-light'>
            email:
            <span className='ml-1 text-gray-700 text-sm sm:text-base font-medium '>
              {sessionState.session?.email}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

Dashboard.Layout = 'dashboard';

export default Dashboard;
