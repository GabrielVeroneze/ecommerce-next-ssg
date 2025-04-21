import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const inter = Inter({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
    title: 'Meteora',
    description: 'A loja virtual mais rápida do universo e região.',
}

interface RootLayoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
