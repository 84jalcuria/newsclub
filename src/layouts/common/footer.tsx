import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('rights');
  return (
    <footer className='w-full my-3 text-center'>
      <h1 className='text-xs  text-gray-800/60 font-medium tracking-widest capitalize'>
        NewsClub 2021: {t('placeholder')}
      </h1>
    </footer>
  );
};

export default Footer;
