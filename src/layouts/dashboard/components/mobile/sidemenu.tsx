import Logo from '@/components/common/logo';
import Title from '@/components/common/title';
import Navigation from '@/layouts/dashboard/components/mobile/navigation';
import { motion } from 'framer-motion';
import SignOutButton from '@/layouts/dashboard/components/signoutbutton';
import Lang from '@/layouts/dashboard/components/lang';
import { useSession } from '@/utils/providers/sessionContextProvider';

interface IProps {
  onClose: Function;
}

const SideMenu = ({ onClose }: IProps) => {
  const { state: sessionState } = useSession();
  return (
    <motion.div
      className='rounded-xl overflow-hidden'
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0, x: 0 }}
    >
      <div
        className='w-full h-full bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg  
    flex flex-col justify-start items-center p-6'
      >
        <div className='w-full flex justify-center items-center space-x-4'>
          <Logo size={30} />
          <Title
            label={'NewsClub'}
            color={'text-green-500'}
            textsize={'text-sm'}
          />
        </div>
        <div className='mt-3 '>
          <Navigation onClose={onClose} />
        </div>
        <div className='w-full mt-3'>
          <Lang />
        </div>
        {sessionState?.session && (
          <div className='mt-10 w-full'>
            <SignOutButton />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SideMenu;
