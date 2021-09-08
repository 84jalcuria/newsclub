import LoadButton from '@/components/spinner/loadbutton';
import { useTranslations } from 'next-intl';
interface IProps {
  label: string;
  submitting: boolean;
  loadingMetadata: boolean;
}

const ShortenerButton = ({ label, submitting, loadingMetadata }: IProps) => {
  const t = useTranslations('dashboard-shortener.card');
  return (
    <button
      type='submit'
      disabled={submitting || loadingMetadata}
      className={`focus:outline-none w-full bg-gradient-to-r from-gray-900 to-gray-800 p-2 rounded-md 
      hover:bg-gray-900 active:bg-gray-900
      ${
        !(submitting || loadingMetadata)
          ? 'transform hover:scale-105 duration-200 ease-linear'
          : null
      } `}
    >
      {submitting ? (
        <LoadButton />
      ) : (
        <h1 className='text-white text-sm font-medium tracking-tight capitalize'>
          {loadingMetadata ? <>{t('button.loading-metadata')}</> : <>{label}</>}
        </h1>
      )}
    </button>
  );
};

export default ShortenerButton;
