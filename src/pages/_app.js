import '../styles/globals.css'
import { DummyProvider } from '../context/DummyContext';
import { appWithTranslation } from 'next-i18next'
// import { I18nextProvider } from 'react-i18next';
import nextI18nextConfig from '../../next-i18next.config';
// import i18n from 'i18next';

// i18n.init({
//   fallbackLng: 'en',
//   debug: true,
//   ns: 'translation',
// });

const emptyInitialI18NextConfig = {
  i18n: {
    // defaultNS: 'common',
    // debug: true,
    defaultLocale: nextI18nextConfig.i18n.defaultLocale,
    locales: nextI18nextConfig.i18n.locales,
    // localeDetection: false,
  },
  // localExtension: 'json',
  // localePath: 'public/locales',
  // serializeConfig: false,
  // reloadOnPrerender: false,
  // defaultNS: 'common'
};

// function MyApp({ Component, pageProps }) {

//   return (
//   <I18nextProvider i18n={i18n}>
//       <DummyProvider>
//         <Component {...pageProps} />
//       </DummyProvider>
//   </I18nextProvider>
//   );
// }

function MyApp({ Component, pageProps }) {

  return (
    <DummyProvider>
      <Component {...pageProps} />
    </DummyProvider>
  );
}

// export default appWithTranslation(MyApp, emptyInitialI18NextConfig);
export default appWithTranslation(MyApp);
