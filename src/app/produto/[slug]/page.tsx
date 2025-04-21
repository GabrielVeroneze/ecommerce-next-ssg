import { getProdutoPorSlug } from '@/lib/api'
import Produto from '@/components/Produto'
import styles from './page.module.css'

interface ProdutoPageProps {
    params: Promise<{ slug: string }>
}

export default async function ProdutoPage({ params }: ProdutoPageProps) {
    const { slug } = await params
    const produto = getProdutoPorSlug(slug)

    if (!produto) {
        return <p>Produto não encontrado.</p>
    }

    return (
        <main className={styles.main}>
            <Produto produto={produto} />
        </main>
    )
}
