import Illustration from '@/components/common/illustration';
import { useTranslations } from 'next-intl';

const Welcome = () => {
  const t = useTranslations('wellcome-message');
  return (
    <div className='relative w-[90%] sm:max-w-sm my-10 sm:mx-5'>
      <Illustration />
      <div className='absolute top-[5%]  left-[8%] sm:left-[3%] flex flex-col justify-center items-center'>
        <h1 className='text-gray-700 text-base sm:text-lg font-bold tracking-tight'>
          {t('wellcome')}
          <span className='ml-2 text-green-500 text-2xl sm:text-3xl font-mono italic tracking-tight'>
            NewsClub
          </span>
        </h1>
        <h1 className='text-xs sm:text-sm text-gray-500 capitalize tracking-tight'>
          {t('description')}
        </h1>
      </div>
    </div>
  );
};

export default Welcome;
