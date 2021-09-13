import { useEffect, useState } from 'react';
import EmailInput from '@/components/common/emailinput';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@/components/common/errormessage';
import SignUpButton from '@/components/common/authbutton';
import Auth from '@/api/auth';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

interface DataForm {
  email: string;
}

const SendEmailCard = () => {
  const router = useRouter();
  const query = useRouter().query;
  const t = useTranslations('sign-in.card-forgot-password');
  const [submitting, setSubmitting] = useState(false);
  const [showSendEmail, setShowSendEmail] = useState(false);
  const [showLinkExpired, setShowLinkExpired] = useState(false);
  const [showSendEmailError, setShowSendEmailError] = useState(false);
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<DataForm>();

  useEffect(() => {
    setFocus('email');
  }, []);

  useEffect(() => {
    if (query.linkExpired) {
      setShowLinkExpired(true);
    }
  }, [query]);

  const onSendEmail = async (data: DataForm) => {
    const { email } = data;
    try {
      setSubmitting(true);
      setShowSendEmail(false);
      setShowSendEmailError(false);
      const res = await Auth.SendEmail(email);
      if (res.status === 200) {
        /*-------------Respond Ok check inbox email------------------*/
        setShowSendEmail(true);
      } else if (res.status === 404) {
        /*----------------Email not register-------------------------*/
        setShowSendEmailError(true);
      }
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      window.alert(error.message);
    }
  };

  const email = register('email', {
    required: { value: true, message: t('email.error.required') },
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: t('email.error.format'),
    },
  });

  return (
    <div className=' w-[90%] sm:max-w-sm bg-gray-50 px-3 sm:px-5 py-8 sm:mx-5 shadow-2xl rounded-md'>
      {showSendEmail ? (
        <div className='flex justify-center items-center'>
          <h1 className='text-gray-800 text-sm font-semibold tracking-tight capitalize'>
            {t('confirm-email')}
          </h1>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSendEmail)}
          className='flex flex-col space-y-7'
        >
          <div className='capitalize text-gray-800 text-base font-medium tracking-tight self-center '>
            {showLinkExpired ? t('link-expired') : t('title')}
          </div>
          <div className='w-full relative z-30'>
            <EmailInput
              placeholder={t('email.placeholder')}
              name={email.name}
              inputRef={email.ref}
              onChange={email.onChange}
              onBlur={email.onBlur}
              error={!!errors?.email}
            />
            {errors?.email && (
              <div className='absolute sm:top-7 sm:left-0'>
                {' '}
                <ErrorMessage message={errors.email.message} />
              </div>
            )}
          </div>
          {/*---------------------Server Error-----------------------*/}
          {showSendEmailError && (
            <ErrorMessage message={t('email-error')} size='lg' />
          )}
          <div className='w-full pt-2'>
            <SignUpButton label={t('button')} submitting={submitting} />
          </div>
        </form>
      )}
    </div>
  );
};

export default SendEmailCard;
