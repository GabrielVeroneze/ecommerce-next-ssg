import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        loader: 'custom',
        loaderFile: './src/app/imagem.ts',
    },
}

export default nextConfig
