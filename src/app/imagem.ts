import { ImageLoaderProps } from 'next/image'

export default function githubLoader({ src, width, quality }: ImageLoaderProps) {
    return `${src}?w=${width}&q=${quality ?? 75}`
}
