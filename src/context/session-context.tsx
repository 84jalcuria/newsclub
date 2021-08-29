import * as React from 'react';

type Session = {
  email: string;
  fullName: string;
  token: string;
  userName: string;
  expiresIn: number;
  id: string;
} | null;

type Error = { status: number; message: string } | null;

type Action =
  | { type: 'loading' }
  | { type: 'success'; session: Session }
  | { type: 'error'; error: Error }
  | { type: 'sign-out' };
type Dispatch = (action: Action) => void;
type State = { loading: boolean; error: Error; session: Session };
type SessionProviderProps = { children: React.ReactNode };

const SessionContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const sessionReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'loading':
      return { error: null, loading: true, session: null };
    case 'success':
      window.localStorage.setItem('session', JSON.stringify(action.session));
      return { error: null, loading: false, session: action.session };
    case 'error':
      return { loading: false, error: action.error, session: null };
    case 'sign-out':
      window.localStorage.removeItem('session');
      return { loading: false, error: null, session: null };
    default:
      throw new Error('Unhabled Action');
  }
};

const SessionProvider = ({ children }: SessionProviderProps) => {
  const [state, dispatch] = React.useReducer(sessionReducer, {
    loading: false,
    session: null,
    error: null,
  });

  React.useEffect(() => {
    const session = window.localStorage.getItem('session');
    if (session) dispatch({ type: 'success', session: JSON.parse(session) });
  }, []);

  const value = { state, dispatch };
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

const useSession = () => {
  const context = React.useContext(SessionContext);
  if (context === undefined)
    throw new Error('useSession must be used within a SessionProvider');
  return context;
};

const SignUp = async (
  dispatch: Dispatch,
  credentials: {
    fullName: string;
    email: string;
    userName: string;
    password: string;
    referralOf: string;
  }
) => {
  const url = `${process.env.NEXT_PUBLIC_END_POINT}/sign-up`;
  try {
    dispatch({ type: 'loading' });
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const status = res.status;
    if (status === 200) {
      /*-----------------------SUCCESS---------------------------*/
      const data = await res.json();
      dispatch({ type: 'success', session: data });
    } else {
      /*-----------------------ERRORS-------------------------*/
      if (status === 400 || status === 404) {
        dispatch({
          type: 'error',
          error: { status, message: 'username already exits.' },
        });
      } else if (status === 500) {
        window.alert('Internal Server Error.');
        dispatch({
          type: 'error',
          error: { status: 500, message: 'internal server error.' },
        });
      }
    }
  } catch (error) {
    window.alert(error.message);
  }
};

const SignOut = (dispatch: Dispatch) => {
  dispatch({ type: 'sign-out' });
};

const SignIn = async (
  dispatch: Dispatch,
  credentials: { userName: string; password: string }
) => {
  const url = `${process.env.NEXT_PUBLIC_END_POINT}/sign-in`;
  try {
    dispatch({ type: 'loading' });
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const status = res.status;
    if (status === 200) {
      /*-----------------------SUCCESS---------------------------*/
      const data = await res.json();
      dispatch({ type: 'success', session: data });
    } else {
      /*-----------------------ERRORS-------------------------*/
      if (status === 400 || status === 404) {
        dispatch({
          type: 'error',
          error: { status, message: 'credentials are wrong.' },
        });
      } else if (status === 500) {
        window.alert('Internal Server Error.');
        dispatch({
          type: 'error',
          error: { status: 500, message: 'internal server error.' },
        });
      }
    }
  } catch (error) {
    window.alert(error.message);
  }
};

export { SessionProvider, useSession, SignUp, SignOut, SignIn };
