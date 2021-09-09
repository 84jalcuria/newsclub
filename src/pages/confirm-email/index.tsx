//import { useTranslations } from 'next-intl';
import Auth from '@/api/auth';

const ConfirmEmail = ({ error }) => {
  //const t = useTranslations('rights');
  return <div>{error}</div>;
};

export const getServerSideProps = async ({ query, locale }) => {
  const { id } = query;
  let error: string;
  if (id) {
    const res = await Auth.ConfirmEmail(id);
    if (res.status === 200) {
      return {
        redirect: {
          destination: '/sign-in?confirm=true',
          permanent: false,
        },
      };
    } else if (res.status === 400) {
      error = 'There was an error verifying the email';
    }
  } else error = 'there was an error with query params';
  return {
    props: {
      message: require(`../../lang/${locale}.json`),
    },
  };
};

ConfirmEmail.Layout = 'none';

export default ConfirmEmail;
