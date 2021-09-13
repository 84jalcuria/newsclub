import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@/components/common/errormessage';
import SignUpButton from '@/components/common/authbutton';
import Auth from '@/api/auth';
import { useTranslations } from 'next-intl';
import PasswordInput from '@/components/common/passwordinput';
import { useRouter } from 'next/router';

interface IProps {
  id: string;
}

interface DataForm {
  password: string;
  confirmpassword: string;
}

const ChangePasswordCard = ({ id }: IProps) => {
  const t = useTranslations('sign-in.card-change-password');
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [changedPassword, setChangedPassword] = useState(false);
  const [changedPasswordError, setChangedPasswordError] = useState(false);

  const {
    register,
    handleSubmit,
    setFocus,
    getValues,
    formState: { errors },
  } = useForm<DataForm>();

  useEffect(() => {
    setFocus('password');
  }, []);

  useEffect(() => {
    (async () => {
      if (id) {
        const res = await Auth.ExpiredLink(id);
        if (res.status === 403) {
          router.replace('/sign-in?forgotPassword=true&linkExpired=true');
        }
      }
    })();
  }, []);

  const onChangedPassword = async (data: DataForm) => {
    const { password } = data;
    try {
      setSubmitting(true);
      setChangedPassword(false);
      setChangedPasswordError(false);
      const res = await Auth.ChangePassword(password, id);
      if (res.status === 200) {
        /*--------------Password has been changed succesfully--------------------------*/
        setChangedPassword(true);
      } else if (res.status === 400) {
        /*---------------------Password changed throw some error-----------------------*/
        setChangedPasswordError(true);
      } else if (res.status === 403) {
        router.replace('/sign-in?forgotPassword=true&linkExpired=true');
      }
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
    }
  };

  const password = register('password', {
    required: { value: true, message: t('password.error.required') },
    pattern: {
      value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{3,})/,
      message: t('password.error.format'),
    },
  });

  const confirmpassword = register('confirmpassword', {
    required: { value: true, message: t('confirmpassword.error.required') },
    validate: (value) =>
      value === getValues('password') || t('confirmpassword.error.format'),
  });

  return (
    <div className=' w-[90%] sm:max-w-sm bg-gray-50 px-3 sm:px-5 py-8 sm:mx-5 shadow-2xl rounded-md'>
      {changedPassword ? (
        <div className='flex justify-center items-center'>
          <h1 className='text-gray-800 text-sm font-semibold tracking-tight capitalize'>
            {t('password-changed')}
          </h1>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onChangedPassword)}
          className='flex flex-col space-y-7'
        >
          <div className='capitalize text-gray-800 text-base font-medium tracking-tight self-center '>
            {t('title')}
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
              <div className='absolute sm:top-7 sm:left-0'>
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
              <div className='absolute sm:top-7 sm:left-0'>
                {' '}
                <ErrorMessage message={errors.confirmpassword.message} />
              </div>
            )}
          </div>
          {/*---------------Server Error-----------------------------*/}
          {changedPasswordError && (
            <ErrorMessage message={t('changed-password-error')} size='lg' />
          )}
          <div className='w-full pt-2'>
            <SignUpButton label={t('button')} submitting={submitting} />
          </div>
        </form>
      )}
    </div>
  );
};

export default ChangePasswordCard;
