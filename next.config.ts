import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    assetPrefix: '/out',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '**',
            },
        ],
    },
}

export default nextConfig
