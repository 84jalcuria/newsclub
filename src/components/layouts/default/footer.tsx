import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('rights');
  return (
    <footer className='w-full mt-16 sm:mt-12 mb-3 text-center'>
      <h1 className='text-sm sm:text-base text-gray-800 font-light tracking-wider capitalize'>
        NewsClub 2021: {t('placeholder')}
      </h1>
    </footer>
  );
};

export default Footer;
