import { useState, useEffect } from 'react';
import UrlInput from '@/pages/dashboard/shortener/components/urlinput';
import AliasInput from '@/pages/dashboard/shortener/components/aliasinput';
import ShortenerButton from '@/pages/dashboard/shortener/components/shortenerbutton';
import UrlMetadata from '@/pages/dashboard/shortener/components/urlmetadata';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@/components/common/errormessage';
import { debounce } from 'debounce';
import { toast, ToastContainer } from 'react-nextjs-toast';
import { useTranslations } from 'next-intl';

interface DataForm {
  url: string;
  alias: string;
  quote: boolean;
}

const ShortenerCard = () => {
  const [Url, setUrl] = useState('');
  const [loadingMetadata, setLoadingMetadata] = useState(false);
  const [shorteningUrl, setShorteningUrl] = useState(false);
  const [shorteningUrlError, setShorteningUrlError] = useState(false);
  const [shortedUrl, setShortedUrl] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    setFocus,
    getValues,
    reset,
    formState: { errors },
  } = useForm<DataForm>();
  const t = useTranslations('dashboard-shortener.card');

  useEffect(() => {
    setFocus('url');
  }, []);

  const onShortener = async (data: FormData) => {
    setShorteningUrl(true);
    /*----------Delaying server response-----------------*/
    await new Promise((res) => {
      setTimeout(res, 3000);
    }).then(() => setShortedUrl(true));

    /*--------------Reset the State---------------------------*/
    setShorteningUrl(false);
    reset();
    //setmetadataPath('');
    //setMetadataDescription('');
    //setMetadataTitle('');

    /*----------------Notification---------------------------*/
    toast.notify(t('toast.message-success'), {
      title: t('toast.title'),
      type: 'success',
    });
  };

  const url = register('url', {
    required: {
      value: true,
      message: t('url.error.required'),
    },
    pattern: {
      value:
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
      message: t('url.error.format'),
    },
  });

  const alias = register('alias', {
    pattern: {
      value:
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]+)([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/,
      message: t('alias.error.format'),
    },
  });

  const quote = register('quote');

  const onChangeUrl = async (e) => {
    const checked = await trigger('url'); //check url pattern

    if (checked) {
      debounce(() => {
        setUrl(getValues('url'));
      }, 1000)();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onShortener)}
      className='w-full max-w-md bg-gray-50 shadow-2xl rounded-md 
    flex flex-col justify-center items-center my-8 pt-4'
    >
      {/*-----------------------Url Forms Inputs--------------------------*/}

      <div className='w-full flex flex-col justify-center space-y-7 p-5'>
        <div className='w-full relative z-30'>
          <UrlInput
            placeholder={t('url.placeholder')}
            name={url.name}
            inputRef={url.ref}
            onChange={(e) => {
              url.onChange(e);
              onChangeUrl(e);
            }}
            onBlur={url.onBlur}
            error={!!errors?.url}
          />
          {errors?.url && (
            <div className='absolute sm:top-7 sm:left-0'>
              {' '}
              <ErrorMessage message={errors.url.message} />
            </div>
          )}
        </div>
        <div className='w-full relative z-30'>
          {!errors.url && (
            <h1 className='absolute -top-5 left-1 text-gray-400 text-xs capitalize'>
              {t('alias.label')}
            </h1>
          )}
          <AliasInput
            placeholder={t('alias.placeholder')}
            name={alias.name}
            inputRef={alias.ref}
            onChange={alias.onChange}
            onBlur={alias.onBlur}
            error={!!errors?.alias}
          />
          {errors?.alias && (
            <div className='absolute sm:top-7 sm:left-0'>
              {' '}
              <ErrorMessage message={errors.alias.message} />
            </div>
          )}
        </div>
        {/*-----------------CheckBox--------------------*/}
        <div className='relative flex items-center ml-1'>
          <input
            ref={quote.ref}
            name={quote.name}
            onChange={quote.onChange}
            onBlur={quote.onBlur}
            type='checkbox'
            id='A3-yes'
            value='yes'
          />
          <h1 className='select-none ml-1 text-green-600 text-xs font-semibold tracking-tight '>
            {t('quote.placeholder')}
          </h1>
        </div>

        <ShortenerButton
          label={t('button.placeholder')}
          submitting={shorteningUrl}
          loadingMetadata={loadingMetadata}
        />
      </div>
      {/*----------------Url Metadata----------------------------*/}
      <div className='w-full px-5 pt-4 pb-6 bg-green-100/30 rounded-md mt-2'>
        <UrlMetadata
          url={Url}
          loadingCallback={(loading: boolean) => setLoadingMetadata(loading)}
        />
      </div>
      <ToastContainer />
    </form>
  );
};

export default ShortenerCard;
