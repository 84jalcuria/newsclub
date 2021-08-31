import { useState } from 'react';
import Logo from '@/components/common/logo';
import SignUpButton from '@/components/layouts/default/signupbutton';
import NavItem from '@/components/layouts/default/navitem';
import ToggleSideBar from '@/components/layouts/default/togglesidebarmenu';
import SideBar from '@/components/layouts/common/sidebar';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import Lang from '@/components/layouts/common/langdesktop';
import { useLang } from '@/context/lang-context';

const Header = () => {
  const { state, dispatch } = useLang();
  const t = useTranslations('nav');
  const [showSideBar, setShowSideBar] = useState(false);
  const router = useRouter();
  const isSelected = (pathname: string) => pathname === router.asPath;

  const changeLang = () => {
    const routepathname = router.asPath;
    if (state.lang === 'es') {
      dispatch({ type: 'set-en' });
      router.push(routepathname, routepathname, { locale: 'en' });
    } else {
      dispatch({ type: 'set-es' });
      router.push(routepathname, routepathname, { locale: 'es' });
    }
  };
  return (
    <header className='w-full mt-2 h-14 sm:h-16 flex justify-between items-center space-x-14 '>
      <div className='flex-shrink-0'>
        <div className='sm:hidden'>
          <Logo size={40} />
        </div>
        <div className='hidden sm:block'>
          <Logo size={50} />
        </div>
      </div>
      <div className='sm:hidden'>
        <ToggleSideBar showSideBar={() => setShowSideBar(true)} />
        {/*Side Bar*/}
        <div
          className={`absolute w-full h-screen top-0 left-0 transform 
      ${
        showSideBar ? 'translate-x-0' : 'translate-x-full'
      } transition duration-200 ease-in-out `}
        >
          <SideBar onClose={() => setShowSideBar(false)} />
        </div>
      </div>
      <div className='hidden flex-grow sm:flex justify-between items-center'>
        <nav className='flex space-x-12'>
          <NavItem
            label={t('about')}
            href={'/about'}
            selected={isSelected('/about')}
          />
          <NavItem
            label={t('contact')}
            href={'/contact'}
            selected={isSelected('/contact')}
          />
        </nav>
        <nav className='flex justify-center items-center space-x-12'>
          <NavItem
            label={t('sign-in')}
            href={'/sign-in'}
            selected={isSelected('/sign-in')}
          />
          <SignUpButton
            label={t('sign-up')}
            callback={() => router.push('/sign-up')}
            selected={isSelected('/sign-up')}
          />
          <Lang
            onCallback={changeLang}
            label={state.lang === 'es' ? 'en' : 'es'}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
