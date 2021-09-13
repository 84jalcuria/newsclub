import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Url from '@/api/url';

interface IProps {
  url: string;
  loadingCallback: (loading: boolean) => void;
}

const UrlMetadata = ({ url, loadingCallback }: IProps) => {
  const [loadingMetadata, setLoadingMetadata] = useState(false);
  const [metadataTitle, setMetadataTitle] = useState('');
  const [metadataDescription, setMetadataDescription] = useState('');
  const [banner, setbanner] = useState('');
  const t = useTranslations('dashboard-shortener.card');

  useEffect(() => {
    if (url) {
      (async () => {
        try {
          setMetadataTitle('');
          setMetadataDescription('');
          setbanner('');
          setLoadingMetadata(true);
          loadingCallback(true);
          const res = await Url.Metadata(url);
          if (res.status === 200) {
            const data = await res.json();
            setMetadataTitle(data.title);
            setMetadataDescription(data.description);
            setbanner(data.banner);
            setLoadingMetadata(false);
            loadingCallback(false);
            return;
          }
          throw new Error((await res.json()).message);
        } catch (error) {
          setLoadingMetadata(false);
          loadingCallback(false);
          setMetadataTitle('');
          setMetadataDescription('');
          setbanner('');
        }
      })();
    }
  }, [url]);

  return (
    <div
      className={`w-full  flex flex-col sm:flex-row justify-center items-start space-y-4 sm:space-y-0 sm:space-x-4 
    ${loadingMetadata ? 'animate-pulse' : null}`}
    >
      {banner ? (
        <img
          src={banner}
          alt='url banner'
          className='w-32 h-32 sm:w-40 sm:h-40 object-center rounded-md flex-shrink-0'
        />
      ) : (
        <div className='w-32 h-32 sm:w-40 sm:h-40 rounded-md flex-shrink-0 bg-gray-200 overflow-hidden' />
      )}

      <div className='w-full flex flex-col justify-start items-start space-y-1'>
        <h1 className='w-full font-medium text-gray-800 text-base tracking-tight'>
          <div className='font-normal text-gray-400 text-xs mr-1 capitalize'>
            {t('metadata.title')}
          </div>
          {metadataTitle ? (
            <>{metadataTitle}</>
          ) : (
            <div className='h-10 w-full bg-gray-200 rounded-md' />
          )}
        </h1>

        <div className='w-full font font-normal text-sm text-gray-600 tracking-tight'>
          <div className='text-gray-400 text-xs mr-1 capitalize'>
            {t('metadata.description')}
          </div>
          {/*-------------Url metadata description----------------------*/}
          {metadataDescription ? (
            <>{metadataDescription}</>
          ) : (
            <div className='h-[84px] w-full bg-gray-200 rounded-md' />
          )}
        </div>
      </div>
    </div>
  );
};

export default UrlMetadata;
