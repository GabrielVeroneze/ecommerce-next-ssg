import { Categorias } from '@/components/Categorias'
import { Produtos } from '@/components/Produtos'
import { getCategorias } from '@/lib/api'
import { Produto } from '@/types/Produto'
import styles from './page.module.css'

async function fetchProdutos() {
    const res = await fetch('http://localhost:3000/api/produtos')

    if (!res.ok) {
        throw new Error('Não foi possível obter os dados')
    }

    const produtos: Produto[] = await res.json()

    return { produtos }
}

export default async function Home() {
    const { produtos } = await fetchProdutos()
    const categorias = getCategorias()

    return (
        <>
            <main className={styles.main}>
                <Categorias categorias={categorias} />
                <Produtos produtos={produtos} />
            </main>
        </>
    )
}
