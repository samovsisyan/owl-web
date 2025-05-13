import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config, { isServer }) {
        if (!isServer) {
            config.module.rules.push({
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['next/babel'],
                            plugins: ['styled-components'],
                        },
                    },
                ],
            });
        }

        return config;
    },
};

export default nextConfig;
