import { useState } from 'react';
import Card from '@/pages/sign-up/components/referrredbycard';
import { useTranslations } from 'next-intl';

const ReferredBy = () => {
  const t = useTranslations('referred-by');
  const [showCard, setShowCard] = useState(false);
  return (
    <div className='w-full flex flex-col justify-center items-start space-y-1'>
      <button
        type='button'
        onClick={() => setShowCard(!showCard)}
        className='flex justify-center items-center focus:outline-none'
      >
        <h1 className='text-green-600 text-xs capitalize'>
          {t('placeholder')}
        </h1>
        <svg
          className={`h-5 w-5 text-green-600 self-end pt-[2px] ${
            showCard ? 'transform rotate-90' : ''
          }`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      {showCard && (
        <Card
          fullname={'Reinier Gonzales Gonzales'}
          email={'reygonzales@gmail.com'}
        />
      )}
    </div>
  );
};

export default ReferredBy;
