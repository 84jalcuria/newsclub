import { useTranslations } from 'next-intl';

interface IProps {
  path: string;
  title: string;
  description: string;
  loading: boolean;
}

const UrlMetadata = ({ path, title, description, loading }: IProps) => {
  const t = useTranslations('dashboard-shortener.card');
  return (
    <div className='w-full  flex flex-col sm:flex-row justify-center items-start space-y-4 sm:space-y-0 sm:space-x-4'>
      {path ? (
        <img
          src={path}
          alt='url banner'
          className='w-32 h-32 sm:w-40 sm:h-40 object-center rounded-md flex-shrink-0'
        />
      ) : (
        <div
          className={`w-32 h-32 sm:w-40 sm:h-40 rounded-md flex-shrink-0 bg-gray-200 overflow-hidden${
            loading ? 'animate-pulse bg-gray-500' : null
          }`}
        />
      )}

      <div className='w-full flex flex-col justify-start items-start space-y-1'>
        <h1 className='w-full font-medium text-gray-800 text-base tracking-tight'>
          <div className='font-normal text-gray-400 text-xs mr-1 capitalize'>
            {t('metadata.title')}
          </div>
          {title ? (
            <>{title}</>
          ) : (
            <div
              className={`h-10 w-full bg-gray-200 rounded-md ${
                loading ? 'animate-pulse bg-gray-500' : null
              }`}
            />
          )}
        </h1>

        <div className='w-full font font-normal text-sm text-gray-600 tracking-tight'>
          <div className='text-gray-400 text-xs mr-1 capitalize'>
            {t('metadata.description')}
          </div>
          {/*-------------Url metadata description----------------------*/}
          {description ? (
            <>{description}</>
          ) : (
            <div
              className={`h-16 w-full bg-gray-200 rounded-md ${
                loading ? 'animate-pulse bg-gray-500' : null
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UrlMetadata;
