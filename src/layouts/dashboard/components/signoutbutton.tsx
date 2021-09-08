import { useTranslations } from 'next-intl';
import { SignOut, useSession } from '@/utils/providers/sessionContextProvider';

const SignOutButton = () => {
  const t = useTranslations('nav');
  const { dispatch: sessionDispatch } = useSession();
  return (
    <button
      type='button'
      onClick={() => SignOut(sessionDispatch)}
      className='w-full focus:outline-none py-2  rounded-md bg-gray-900/70 hover:bg-gray-800/70
      group transform hover:scale-110 ease-linear duration-200 shadow-lg'
    >
      <h1
        className='text-gray-500 text-xs font-medium capitalize tracking-tight group-hover:text-gray-200
      trasform group-hover:scale-100 ease-linear duration-200'
      >
        {t('button-signout')}
      </h1>
    </button>
  );
};

export default SignOutButton;
