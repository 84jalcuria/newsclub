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

const auth = { SignIn, SignUp };

export default auth;