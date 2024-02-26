/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    serverRuntimeConfig: {},
    publicRuntimeConfig: {
        VERSION: process.env.npm_package_version
    },
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'ui-avatars.com',
            port: '',
            pathname: '/**'
        }
        ],
        unoptimized: true
    }
};

export default nextConfig;
