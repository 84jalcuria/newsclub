import Illustration from '@/components/pages/common/illustration';
import { useTranslations } from 'next-intl';

const Welcome = () => {
  return (
    <div className='relative z-40 w-full max-w-md flex flex-col justify-center items-start space-y-6 sm:space-y-10'>
      <TextDesktop />
      <div className='absolute top-2 left-4'>
        <TextMobile />
      </div>
      <Illustration />
    </div>
  );
};

const TextMobile = () => {
  const t = useTranslations('wellcome-message');
  return (
    <div className=' sm:hidden text-center'>
      <h1 className='text-gray-800 text-base font-extrabold tracking-wide'>
        {/*Wellcome to */}
        {t('wellcome')}
        <span className='text-green-600 text-xl font-medium ml-2'>
          NewsClub
        </span>
      </h1>
      <span className='text-gray-500 text-sm sm:text-base capitalize '>
        {t('description')}
      </span>
    </div>
  );
};

const TextDesktop = () => {
  const t = useTranslations('wellcome-message');
  return (
    <div className='hidden sm:block text-center'>
      <h1 className=' text-gray-800 text-lg sm:text-xl lg:text-2xl font-extrabold tracking-wide'>
        {/*Wellcome to*/}
        {t('wellcome')}
        <span className='text-green-600 text-xl sm:text-2xl lg:text-3xl font-medium ml-2'>
          NewsClub
        </span>
      </h1>
      <span className='text-gray-500 text-xs sm:text-sm md:text-base capitalize'>
        {t('description')}
      </span>
    </div>
  );
};

export default Welcome;
