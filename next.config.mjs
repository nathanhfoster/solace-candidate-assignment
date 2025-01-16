/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                perf_hooks: false,
                fs: false,
            };
        }
        return config;
    },
};

export default nextConfig;
