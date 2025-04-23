import { Produto as ProdutoType } from '@/types/Produto'
import Produto from '@/components/Produto'
import styles from './page.module.css'

async function getProduto(slug: string) {
    const res = await fetch('https://api.npoint.io/53784130b3981f299ec0/produtos')

    const produtos: ProdutoType[] = await res.json()

    const produto = produtos.find((produto) => produto.id.toString() === slug)

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
