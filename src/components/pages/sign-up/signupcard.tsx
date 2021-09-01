import { useState } from 'react';
import Link from 'next/link';
import UserNameInput from '@/components/pages/common/usernameinput';
import PasswordInput from '@/components/pages/common/passwordinput';
import SignUpButton from '@/components/common/authbutton';
import EmailInput from '@/components/pages/common/emailinput';
import TextInput from '@/components/pages/common/textinput';
import ReferredBy from '@/components/pages/sign-up/referredby';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@/components/pages/common/errormessage';
import { useSession, SignUp } from '@/context/session-context';
import { useTranslations } from 'next-intl';

interface DataForm {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  terms: string;
}

const SignUpCard = () => {
  const t = useTranslations('sign-up.card');
  const [bot, setBot] = useState(true);
  const [botMessage, setBotMessage] = useState('');

  const BOTMESSAGE = t('bot-message');

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<DataForm>();

  const { state: sessionState, dispatch: sessionDispatch } = useSession();

  const onSignUp = async (data) => {
    const { username, password, fullname, email } = data;
    if (bot) {
      setBotMessage(BOTMESSAGE);
      return;
    }
    await SignUp(sessionDispatch, {
      fullName: fullname,
      userName: username,
      password: password,
      email: email,
      referralOf: '9023480953945', //TODO: this value must to be dynamic
    });
  };

  const fullname = register('fullname', {
    required: { value: true, message: t('fullname.error.required') },
    pattern: {
      // value: /^[\A-Za-z]+[\A-Za-z\s]{1,50}$/,
      //value: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]*)$/,
      value:
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]+)([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/,
      message: t('fullname.error.format'),
    },
    minLength: {
      value: 3,
      message: t('fullname.error.length'),
    },
  });

  const username = register('username', {
    required: { value: true, message: t('username.error.required') },
    pattern: {
      //value: /^[\dA-Za-z]+[\dA-Za-z\s]{1,50}$/,
      value: /^([\dA-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]+)$/,
      message: t('username.error.format'),
    },
    minLength: {
      value: 3,
      message: t('username.error.length'),
    },
  });

  const email = register('email', {
    required: { value: true, message: t('email.error.required') },
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: t('email.error.format'),
    },
  });

  const password = register('password', {
    required: { value: true, message: t('password.error.required') },
    pattern: {
      //value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})/,
      value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{3,})/,
      message: t('password.error.format'),
    },
  });

  const confirmpassword = register('confirmpassword', {
    required: { value: true, message: t('confirmpassword.error.required') },
    validate: (value) =>
      value === getValues('password') || t('confirmpassword.error.format'),
  });

  const terms = register('terms', {
    required: { value: true, message: t('terms.error.required') },
  });

  function captchaOnChange(token) {
    if (!!token) {
      setBot(false);
      setBotMessage('');
    } else {
      setBotMessage(BOTMESSAGE);
    }
  }

  return (
    <div className='w-full max-w-md bg-white px-3 sm:px-5 pb-10 pt-6 shadow-2xl rounded-md'>
      <form
        onSubmit={handleSubmit(onSignUp)}
        className='flex flex-col space-y-7'
      >
        <div className='w-full flex flex-col justify-center items-center space-y-3'>
          <h1 className='capitalize text-gray-800 text-base md:text-xl font-medium self-center mb-2'>
            {t('title')}
          </h1>
          <div className='w-full self-start sm:hidden'>
            <ReferredBy />
          </div>
        </div>
        <div className='w-full relative z-30'>
          <TextInput
            placeholder={t('fullname.placeholder')}
            name={fullname.name}
            inputRef={fullname.ref}
            onChange={fullname.onChange}
            onBlur={fullname.onBlur}
            error={!!errors?.fullname}
          />
          {errors?.fullname && (
            <div className='absolute sm:top-10 sm:left-0'>
              {' '}
              <ErrorMessage message={errors.fullname.message} />
            </div>
          )}
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
            <div className='absolute sm:top-10 sm:left-0'>
              {' '}
              <ErrorMessage message={errors.email.message} />
            </div>
          )}
        </div>{' '}
        <div className='w-full relative z-30'>
          <UserNameInput
            placeholder={t('username.placeholder')}
            name={username.name}
            inputRef={username.ref}
            onChange={username.onChange}
            onBlur={username.onBlur}
            error={!!errors?.username}
          />
          {errors?.username && (
            <div className='absolute sm:top-10 sm:left-0'>
              {' '}
              <ErrorMessage message={errors.username.message} />
            </div>
          )}
        </div>
        <div className='w-full relative z-30'>
          <PasswordInput
            placeholder={t('password.placeholder')}
            name={password.name}
            inputRef={password.ref}
            onChange={password.onChange}
            onBlur={password.onBlur}
            error={!!errors.password}
          />
          {errors?.password && (
            <div className='absolute sm:top-10 sm:left-0'>
              {' '}
              <ErrorMessage message={errors.password.message} />
            </div>
          )}
        </div>
        <div className='w-full relative z-30'>
          <PasswordInput
            placeholder={t('confirmpassword.placeholder')}
            name={confirmpassword.name}
            inputRef={confirmpassword.ref}
            onChange={confirmpassword.onChange}
            onBlur={confirmpassword.onBlur}
            error={!!errors?.confirmpassword}
          />
          {errors?.confirmpassword && (
            <div className='absolute sm:top-10 sm:left-0'>
              {' '}
              <ErrorMessage message={errors.confirmpassword.message} />
            </div>
          )}
        </div>
        <div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
            size='compact'
            onChange={captchaOnChange}
          />
          {botMessage && <ErrorMessage message={botMessage} />}
        </div>
        {/*-----------------CheckBox--------------------*/}
        <div className='relative flex items-center ml-1'>
          <input
            ref={terms.ref}
            name={terms.name}
            onChange={terms.onChange}
            onBlur={terms.onBlur}
            type='checkbox'
            id='A3-yes'
            value='yes'
          />
          <Link href='/terms'>
            <a
              href='#'
              className='select-none ml-1 text-green-600 text-xs font-semibold tracking-normal cursor-pointer underline'
            >
              {t('terms.placeholder')}
            </a>
          </Link>
          {errors?.terms && (
            <div className='absolute top-4 left-0'>
              <ErrorMessage message={errors?.terms.message} />
            </div>
          )}
        </div>
        {/*--------------------------------------------*/}
        {sessionState?.error && (
          <ErrorMessage
            message={
              sessionState.error.status === 404 ||
              sessionState.error.status === 400
                ? t('credentials-error')
                : ''
            }
            size='lg'
          />
        )}
        <Link href='/sign-in'>
          <a
            href='#'
            type='button'
            className='self-start text-gray-800 text-xs sm:text-sm font-bold tracking-normal  underline ml-1'
          >
            {t('sign-in-link')}
          </a>
        </Link>
        <SignUpButton label={t('button')} submitting={sessionState?.loading} />
      </form>
    </div>
  );
};

export default SignUpCard;
