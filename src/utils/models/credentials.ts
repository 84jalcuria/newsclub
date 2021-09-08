export type SignUpCredentials = {
  fullName: string;
  email: string;
  userName: string;
  password: string;
  referralOf: string;
  emailConfirmed: boolean;
};

export type SignInCredentials = {
  userName: string;
  password: string;
};
