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

const SignUpCard = () => {
  const [submitting, setSubmitting] = useState(false);
  const [bot, setBot] = useState(true);
  const [botMessage, setBotMessage] = useState('');
  const [backendMessage, setBackendMessage] = useState('');

  const BOTMESSAGE = 'check you are not a robot?';
  const BACKENDMESSAGE = 'username is not available.';

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const fullname = register('fullname', {
    required: { value: true, message: 'required' },
    pattern: {
      value: /^[\A-Za-z]+[\A-Za-z\s]{1,50}$/,
      message: 'only letters.',
    },
    minLength: {
      value: 3,
      message: 'more than 3 character.',
    },
  });

  const username = register('username', {
    required: { value: true, message: 'required' },
    pattern: {
      value: /^[\dA-Za-z]+[\dA-Za-z\s]{1,50}$/,
      message: 'only alphanumeric.',
    },
    minLength: {
      value: 3,
      message: 'more than 3 character.',
    },
  });

  const email = register('email', {
    required: { value: true, message: 'required' },
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'only email.',
    },
  });

  const password = register('password', {
    required: { value: true, message: 'required' },
    pattern: {
      value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
      message: 'weak password.',
    },
  });

  const confirmpassword = register('confirmpassword', {
    required: { value: true, message: 'required' },
    validate: (value) =>
      value === getValues('password') || 'password not match',
  });

  const terms = register('terms', {
    required: { value: true, message: 'accept all terms of use.' },
  });

  function captchaOnChange(token) {
    if (!!token) {
      setBot(false);
      setBotMessage('');
    } else {
      setBotMessage(BOTMESSAGE);
    }
  }

  const onSignUp = (data) => {
    if (bot) {
      setBotMessage(BOTMESSAGE);
      return;
    }
    //GO ON

    console.log(data);
    setSubmitting(true);
    setBackendMessage('');
    setTimeout(() => {
      setSubmitting(false);
      setBackendMessage(BACKENDMESSAGE);
      //router.replace('/dashboard');
    }, 3000);
  };

  return (
    <div className='w-full max-w-md bg-white px-3 sm:px-5 pb-10 pt-6 shadow-2xl rounded-md'>
      <form
        onSubmit={handleSubmit(onSignUp)}
        className='flex flex-col space-y-7'
      >
        <div className='w-full flex flex-col justify-center items-center space-y-3'>
          <h1 className='capitalize text-gray-800 text-base md:text-xl font-medium self-center mb-2'>
            create your account
          </h1>
          <div className='w-full self-start sm:hidden'>
            <ReferredBy />
          </div>
        </div>
        <div className='w-full relative z-30'>
          <TextInput
            placeholder={'Full Name'}
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
            placeholder={'Email'}
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
            placeholder={'Username'}
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
            placeholder={'Password'}
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
            placeholder={'Confirm Pasword'}
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
              className='select-none ml-1 text-green-600 text-xs sm:text-sm font-semibold tracking-normal cursor-pointer underline'
            >
              Accept all terms of use
            </a>
          </Link>
          {errors?.terms && (
            <div className='absolute top-4 left-0'>
              <ErrorMessage message={errors?.terms.message} />
            </div>
          )}
        </div>
        {/*--------------------------------------------*/}
        {backendMessage && <ErrorMessage message={backendMessage} size='lg' />}
        <Link href='/sign-in'>
          <a
            href='#'
            type='button'
            className='self-start text-gray-800 text-xs sm:text-sm font-bold tracking-normal  underline ml-1'
          >
            I have a account
          </a>
        </Link>
        <SignUpButton label={'sign up'} submitting={submitting} />
      </form>
    </div>
  );
};

export default SignUpCard;
