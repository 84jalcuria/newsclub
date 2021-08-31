import Tittle from '@/components/common/title';
import SideBarItem from '@/components/layouts/common/sidebaritem';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import Lang from '@/components/layouts/common/lang';
import { useLang } from '@/context/lang-context';

interface IProps {
  onClose: () => void;
}

const SideBar = ({ onClose }: IProps) => {
  const { lang, setLangStorage } = useLang();
  const t = useTranslations('nav');
  const router = useRouter();
  const isSelected = (pathname: string) => pathname === router.asPath;

  const changeLang = () => {
    const routepathname = router.asPath;
    if (lang === 'es') {
      setLangStorage('en');
      router.push(routepathname, routepathname, { locale: 'en' });
    } else {
      setLangStorage('es');
      router.push(routepathname, routepathname, { locale: 'es' });
    }
    onClose();
  };

  return (
    <div className='w-full h-full bg-gray-100 flex flex-col justify-between items-center'>
      {/*-----------------Close button-------------------------*/}
      <div className='w-full flex justify-between items-center py-3 px-3'>
        <button type='button' onClick={onClose} className='focus:outline-none'>
          <svg
            className='h-7 w-7 text-gray-800'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
        <Lang onCallback={changeLang} label={lang === 'es' ? 'en' : 'es'} />
      </div>
      {/*-----------------------Border-----------------------------*/}
      <div className='w-full border-b-[1px] border-gray-400' />
      {/*-------------------------Navigation SideBar------------------------------*/}
      <div className='flex-grow w-full flex flex-col justify-start items-start '>
        <SideBarItem
          label={t('sign-in')}
          callback={() => {
            onClose();
            router.push('/sign-in');
          }}
          selected={isSelected('/sign-in')}
        >
          <svg
            className='h-5 w-5 text-gray-700'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
            />
          </svg>
        </SideBarItem>
        <SideBarItem
          label={t('sign-up')}
          callback={() => {
            onClose();
            router.push('/sign-up');
          }}
          selected={isSelected('/sign-up')}
        >
          <svg
            className='h-5 w-5 text-gray-700'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z' />
          </svg>
        </SideBarItem>
        <SideBarItem
          label={t('about')}
          callback={() => {
            onClose();
            router.push('/about');
          }}
          selected={isSelected('/about')}
        >
          <svg
            className='h-5 w-5 text-gray-700'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
          </svg>
        </SideBarItem>
        <SideBarItem
          label={t('contact')}
          callback={() => {
            onClose();
            router.push('/contact');
          }}
          selected={isSelected('/contact')}
        >
          <svg
            className='h-5 w-5 text-gray-700'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
          </svg>
        </SideBarItem>
      </div>
      <div className='py-5'>
        <Tittle
          color={'text-green-800'}
          textsize={'text-sm'}
          label={'NewsClub'}
        />
      </div>
    </div>
  );
};

export default SideBar;
