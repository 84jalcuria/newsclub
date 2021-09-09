import '../styles/tailwind.css';
//import type { AppProps } from 'next/app';
import Dashboard from '@/layouts/dashboard/dashboard';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { SessionProvider } from 'utils/providers/sessionContextProvider';
import { LangProvider } from 'utils/providers/langContextProvider';
import { NextIntlProvider } from 'next-intl';
import { AnimatePresence } from 'framer-motion';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps, router }) {
  const Layout =
    Component.Layout === 'none' ? ({ children }) => <>{children}</> : Dashboard;

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <NextIntlProvider messages={pageProps.messages}>
          <LangProvider>
            <SessionProvider>
              <Layout>
                <Component {...pageProps} key={router.route} />
              </Layout>
            </SessionProvider>
          </LangProvider>
        </NextIntlProvider>
      </AnimatePresence>
    </>
  );
}
export default MyApp;

/**/
