import * as React from 'react';

type Action = { type: 'set-es' } | { type: 'set-en' };
type State = { lang: string };
type Dispatch = (action: Action) => void;
type LangProviderProps = {
  children: React.ReactNode;
};

const LangContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const reducerLang = (state: State, action: Action) => {
  switch (action.type) {
    case 'set-es':
      window.localStorage.setItem('newsclub.lang', 'es');
      return { lang: 'es' };
    case 'set-en':
      window.localStorage.setItem('newsclub.lang', 'en');
      return { lang: 'en' };
    default:
      throw new Error('Action no available');
  }
};

const LangProvider = ({ children }: LangProviderProps) => {
  const [state, dispatch] = React.useReducer(reducerLang, { lang: '' });

  React.useEffect(() => {
    const lang = window.localStorage.getItem('newsclub.lang');
    if (lang) {
      const action: Action =
        lang === 'es' ? { type: 'set-es' } : { type: 'set-en' };
      dispatch(action);
    } else {
      window.localStorage.setItem('newsclub.lang', 'es'); //spanish default
    }
  }, []);

  const value = { state, dispatch };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

const useLang = () => {
  const context = React.useContext(LangContext);
  if (context === undefined)
    throw new Error('useLang must to be within a LangProvider');
  return context;
};

export { useLang, LangProvider };
