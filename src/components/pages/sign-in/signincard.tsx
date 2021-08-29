import { useState } from 'react';
import Link from 'next/link';
import UserNameInput from '@/components/pages/common/usernameinput';
import PasswordInput from '@/components/pages/common/passwordinput';
import SignInButton from '@/components/common/authbutton';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@/components/pages/common/errormessage';
import { useSession, SignIn } from '@/context/session-context';

type DataForm = {
  username: string;
  password: string;
};

const SignInCard = () => {
  const [bot, setBot] = useState(true);
  const [botMessage, setBotMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>({ mode: 'onChange' });

  const { state: sessionState, dispatch: sessionDispatch } = useSession();

  const BOTMESSAGE = 'check you are not a robot?';

  const onSignIn = async (data) => {
    const { username, password } = data;
    if (bot) {
      setBotMessage(BOTMESSAGE);
      return;
    }
    await SignIn(sessionDispatch, { userName: username, password: password });
  };

  const username = register('username', {
    required: { value: true, message: 'required' },
  });

  const password = register('password', {
    required: { value: true, message: 'required' },
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
    <div className='w-full max-w-md bg-white px-3 sm:px-5 py-10 shadow-2xl rounded-md'>
      <form
        onSubmit={handleSubmit(onSignIn)}
        action=''
        className='flex flex-col space-y-7'
      >
        <h1 className='capitalize text-gray-800 text-base md:text-xl font-medium self-center mb-2'>
          Login and go on
        </h1>
        <div className='w-full relative z-30'>
          <UserNameInput
            error={!!errors?.username}
            placeholder={'Username'}
            inputRef={username.ref}
            onChange={username.onChange}
            onBlur={username.onBlur}
            name={username.name}
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
            error={!!errors?.password}
            placeholder={'Password'}
            inputRef={password.ref}
            onChange={password.onChange}
            onBlur={password.onBlur}
            name={password.name}
          />
          {errors?.password && (
            <div className='absolute sm:top-10 sm:left-0'>
              {' '}
              <ErrorMessage message={errors.password.message} />
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
        {sessionState.error && (
          <ErrorMessage message={sessionState.error.message} size='lg' />
        )}

        <Link href='/sign-up'>
          <a
            href='#'
            className='self-start text-gray-800 text-sm sm:text-base font-bold tracking-normal  underline ml-1'
          >
            I have not a account
          </a>
        </Link>
        <SignInButton label={'login'} submitting={sessionState.loading} />
      </form>
    </div>
  );
};

export default SignInCard;
