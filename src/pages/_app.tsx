import '../styles/tailwind.css';
//import type { AppProps } from 'next/app';
import Default from '@/layouts/default';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { SessionProvider } from '@/context/session-context';
import { NextIntlProvider } from 'next-intl';

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

function MyApp({ Component, pageProps }) {
  const Layout =
    Component.Layout === 'none'
      ? ({ children }) => <>{children}</>
      : Component.Layout === 'default'
      ? Default
      : ({ children }) => <>{children}</>;
  return (
    <>
      <NextIntlProvider messages={pageProps.messages}>
        <SessionProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </NextIntlProvider>
    </>
  );
}
export default MyApp;

/**/
