/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: { ignoreDuringBuilds: true },
    reactStrictMode: true,
    images: {
        domains: ["cdn.hashnode.com"],
    },
};

module.exports = nextConfig;
