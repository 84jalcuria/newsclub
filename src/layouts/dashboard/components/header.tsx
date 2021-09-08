import Logo from '@/components/common/logo';
import Title from '@/components/common/title';
import Navigation from '@/layouts/dashboard/components/navigation';
import SignOutButton from '@/layouts/dashboard/components/signoutbutton';
import { useSession } from '@/utils/providers/sessionContextProvider';
import Lang from '@/layouts/dashboard/components/lang';

const Header = () => {
  const { state: sessionState } = useSession();
  return (
    <div
      className='w-full h-full bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg pt-6 
    flex flex-col justify-between items-center '
    >
      <div className='w-full flex flex-col justify-start items-end'>
        <div className='w-full flex justify-start items-center space-x-4 sm:w-[90%] md:w-[80%]'>
          <Logo size={40} />
          <Title
            label={'NewsClub'}
            color={'text-green-500'}
            textsize={'text-base'}
          />
        </div>

        <div className='sm:w-[95%] md:w-[80%] mt-3 '>
          <Navigation />
        </div>
        <div className='w-full sm:w-[90%] md:w-[80%] flex justify-start items-center mt-3'>
          <Lang />
        </div>
      </div>
      {sessionState?.session && (
        <div className='w-full px-6 pb-8'>
          <SignOutButton />
        </div>
      )}
    </div>
  );
};

export default Header;
