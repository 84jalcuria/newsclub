import * as React from 'react';

type LangProviderProps = {
  children: React.ReactNode;
};
const LangContext = React.createContext(undefined);

const LangProvider = ({ children }: LangProviderProps) => {
  const [lang, setLang] = React.useState<string>('');
  const defaultlang = 'es';

  React.useEffect(() => {
    const lang = window.localStorage.getItem('newsclub.lang');
    if (lang) {
      setLang(lang);
    } else {
      window.localStorage.setItem('newsclub.lang', defaultlang);
      setLang(defaultlang);
    }
  }, []);

  const setLangStorage = (lang: string) => {
    window.localStorage.setItem('newsclub.lang', lang);
    setLang(lang);
  };

  const value = { lang, setLangStorage };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

const useLang = () => {
  const context = React.useContext(LangContext);
  if (context === undefined)
    throw new Error('useLang must to be within a LangProvider');
  return context;
};

export { useLang, LangProvider };
