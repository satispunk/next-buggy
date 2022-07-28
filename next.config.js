/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['none', 'en', 'ru'],
        defaultLocale: 'none',
    }
}

module.exports = nextConfig
