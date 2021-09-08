import { useEffect, useState } from 'react';
import Link from 'next/link';
import UserNameInput from '@/components/common/usernameinput';
import PasswordInput from '@/components/common/passwordinput';
import SignInButton from '@/components/common/authbutton';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@/components/common/errormessage';
import { useSession, SignIn } from 'utils/providers/sessionContextProvider';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

type DataForm = {
  username: string;
  password: string;
};
/*Sign in card*/
const SignInCard = () => {
  const query = useRouter().query;
  const t = useTranslations('sign-in.card');
  const [bot, setBot] = useState(true);
  const [botMessage, setBotMessage] = useState('');
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>({ mode: 'onChange' });

  const { state: sessionState, dispatch: sessionDispatch } = useSession();

  useEffect(() => {
    if (query.confirm) setShowConfirmEmail(true);
  }, [query]);

  const BOTMESSAGE = t('bot-message');

  const onSignIn = async (data) => {
    const { username, password } = data;
    if (bot) {
      setBotMessage(BOTMESSAGE);
      return;
    }
    await SignIn(sessionDispatch, { userName: username, password: password });
  };

  const username = register('username', {
    required: { value: true, message: t('username.error') },
  });

  const password = register('password', {
    required: { value: true, message: t('password.error') },
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
    <div className=' w-[90%] sm:max-w-sm bg-gray-50 px-3 sm:px-5 py-8 sm:mx-5 shadow-2xl rounded-md'>
      <form
        onSubmit={handleSubmit(onSignIn)}
        action=''
        className='flex flex-col space-y-7'
      >
        <h1 className='capitalize text-gray-800 text-base font-medium tracking-tight self-center '>
          {showConfirmEmail ? (
            <>Su identidad ha sido confirmada</>
          ) : (
            <>{t('title')}</>
          )}
        </h1>
        <div className='w-full relative z-30'>
          <UserNameInput
            error={!!errors?.username}
            placeholder={t('username.placeholder')}
            inputRef={username.ref}
            onChange={username.onChange}
            onBlur={username.onBlur}
            name={username.name}
          />
          {errors?.username && (
            <div className='absolute top-7 left-0'>
              {' '}
              <ErrorMessage message={errors.username.message} />
            </div>
          )}
        </div>
        <div className='w-full relative z-30'>
          <PasswordInput
            error={!!errors?.password}
            placeholder={t('password.placeholder')}
            inputRef={password.ref}
            onChange={password.onChange}
            onBlur={password.onBlur}
            name={password.name}
          />
          {errors?.password && (
            <div className='absolute top-7 left-0'>
              {' '}
              <ErrorMessage message={errors.password.message} />
            </div>
          )}
        </div>
        <div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
            size='normal'
            onChange={captchaOnChange}
          />
          {botMessage && <ErrorMessage message={botMessage} />}
        </div>
        {sessionState?.error && (
          <ErrorMessage
            message={
              sessionState.error.status === 404
                ? t('credentials-error')
                : sessionState.error.status === 307
                ? t('confirm-email-error')
                : ''
            }
            size='lg'
          />
        )}

        <Link href='/sign-up'>
          <a
            href='#'
            className='self-start text-gray-700 text-xs font-medium tracking-tight  underline ml-1'
          >
            {t('forget-password')}
          </a>
        </Link>
        <SignInButton label={t('button')} submitting={sessionState?.loading} />
      </form>
    </div>
  );
};

export default SignInCard;
