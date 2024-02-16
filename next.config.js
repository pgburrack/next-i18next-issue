const CONSTANTS = require('./next.constants');
const dotEnv = require('dotenv');
const { i18n } = require('./next-i18next.config')

const NBA_BUILD_ENV = process.env.NBA_BUILD_ENV;
let env = CONSTANTS[NBA_BUILD_ENV] || CONSTANTS.production;

const envConfig = dotEnv.config({ path: `.env.${NBA_BUILD_ENV}` });

const baseConfig = dotEnv.config();


if (envConfig && envConfig.parsed) {
  env = { ...env, ...baseConfig.parsed, ...envConfig.parsed };
}

console.log({ i18n });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env,
  i18n,
}

module.exports = nextConfig
