import { Produto as ProdutoType } from '@/types/Produto'
import Produto from '@/components/Produto'
import styles from './page.module.css'

async function getProduto(slug: string) {
    const res = await fetch(`http://localhost:3000/api/produto/${slug}`)

    const produto: ProdutoType = await res.json()

    return produto
}

interface ProdutoPageProps {
    params: Promise<{ slug: string }>
}

export default async function ProdutoPage({ params }: ProdutoPageProps) {
    const { slug } = await params
    const produto = await getProduto(slug)

    if (!produto) {
        return <p>Produto não encontrado.</p>
    }

    return (
        <main className={styles.main}>
            <Produto produto={produto} />
        </main>
    )
}
