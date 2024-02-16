
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps (ctx) {
  // let translations = {};
  console.log(ctx.locale, ctx.req.headers['accept-language']);
  // switch (ctx.locale) {
  //   case 'en':
  //      translations = english;
  //     break;
  //   case 'fr':
  //     translations = french;
  //     break;
  //   default:
  //     translations = english;
  //     break;
  // }

  // console.log(tr._nextI18Next);
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common'])),
    },
  };
}
