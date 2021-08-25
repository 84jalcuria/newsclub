//import type { NextPage } from 'next';
//import Cursor from '@/components/cursor';
import Header from '@/components/layouts/default/header';
import Footer from '@/components/layouts/default/footer';

interface IProps {
  children: React.ReactNode;
}

const Default = ({ children }: IProps) => {
  return (
    <div
      className='w-full min-h-screen bg-transparent container mx-auto flex flex-col justify-between items-center
     px-4 lg:px-36 '
    >
      <div className='w-full fixed z-50 px-4 sm:px-0 sm:relative bg-gray-100/95 sm:bg-none'>
        <Header />
      </div>
      {/*--------------Filling header------------*/}
      <div className='w-full h-14 mt-2 sm:hidden' />
      {children}
      <Footer />
    </div>
  );
};

export default Default;
