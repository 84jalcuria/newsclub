import {
  SignInCredentials,
  SignUpCredentials,
} from '@/utils/models/credentials';

const baseUrl = process.env.NEXT_PUBLIC_END_POINT;

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const SignUp = async (credentials: SignUpCredentials) => {
  const url = baseUrl + '/sign-up';
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(credentials),
  });
  return res;
};

const SignIn = async (credentials: SignInCredentials) => {
  const url = baseUrl + '/sign-in';
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(credentials),
  });
  return res;
};

const ConfirmEmail = async (id: string) => {
  const url = baseUrl + '/confirm-email?id=' + id;
  const res = await fetch(url, {
    method: 'GET',
    headers,
  });
  return res;
};

const SendEmail = async (email: string) => {
  const url = baseUrl + '/change-password-request';
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email }),
  });
  return res;
};

const ChangePassword = async (password: string, id: string) => {
  const url = baseUrl + '/change-password';
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      newPassword: password,
      id: encodeURIComponent(id).replace('+', '2%B'),
    }),
  });
  return res;
};

const ExpiredLink = async (id: string) => {
  const url = baseUrl + '/link-validity';
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      id: encodeURIComponent(id).replace('+', '2%B'),
    }),
  });
  return res;
};

const auth = {
  SignIn,
  SignUp,
  ConfirmEmail,
  SendEmail,
  ChangePassword,
  ExpiredLink,
};

export default auth;
