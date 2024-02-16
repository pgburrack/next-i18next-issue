// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */
// module.exports = {
//   // https://www.i18next.com/overview/configuration-options#logging
//   debug: true,
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },
//   /** To avoid issues when deploying to some paas (vercel...) */
//   // localePath:
//   //   typeof window ===   'undefined'
//   //     ? require('path').resolve('./public/locales')
//   //     : '/locales',

//   // reloadOnPrerender: process.env.NODE_ENV === 'development',

//   /**
//    * @link https://github.com/i18next/next-i18next#6-advanced-configuration
//    */
//   // saveMissing: false,
//   // strictMode: true,
//   // serializeConfig: false,
//   // react: { useSuspense: false }
//   // defaultNS: 'translation',
//   // reloadOnPrerender: true,
// }

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeDetection: false, // required to avoid redirects https://nextjs.org/docs/pages/building-your-application/routing/internationalization#disabling-automatic-locale-detection
  },
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
  react: {
    useSuspense: false,
  },
}
