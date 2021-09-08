import { useState } from 'react';
import Header from '@/layouts/dashboard/components/header';
import Footer from '@/layouts/common/footer';
import ProfileHeader from '@/layouts/common/profileheader';
import { useSession } from '@/utils/providers/sessionContextProvider';
import ToggleMenu from '@/layouts/dashboard/components/mobile/togglemenu';
import SideMenu from '@/layouts/dashboard/components/mobile/sidemenu';
import { AnimatePresence } from 'framer-motion';

interface IProps {
  children: React.ReactNode;
}

const Dashboard = ({ children }: IProps) => {
  const { state: sessionState } = useSession();
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <div className='min-h-screen container mx-auto rounded-3xl overflow-hidden shadow-2xl flex'>
      <div className='hidden sm:block min-h-screen sm:w-[40%] md:w-[230px] '>
        <Header />
      </div>
      <div className='fixed z-50 top-5 left-5 sm:hidden'>
        <ToggleMenu
          callback={() => setShowSideMenu(!showSideMenu)}
          isOpen={showSideMenu}
        />
        <AnimatePresence>
          {showSideMenu && <SideMenu onClose={() => setShowSideMenu(false)} />}
        </AnimatePresence>
      </div>
      <div
        className='relative min-h-screen  flex-grow bg-white/25 
      flex flex-col justify-between items-stretch'
      >
        {sessionState?.session && (
          <div className='hidden sm:block absolute top-[30px] right-6'>
            <ProfileHeader email={sessionState?.session?.email} />
          </div>
        )}

        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
