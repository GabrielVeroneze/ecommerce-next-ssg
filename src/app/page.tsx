import { Categorias } from '@/components/Categorias'
import { Produtos } from '@/components/Produtos'
import { Produto } from '@/types/Produto'
import { Categoria } from '@/types/Categoria'
import styles from './page.module.css'

async function fetchProdutos() {
    const res = await fetch('http://localhost:3000/api/produtos')

    if (!res.ok) {
        throw new Error('Não foi possível obter os dados')
    }

    const produtos: Produto[] = await res.json()

    return produtos
}

async function fetchCategorias() {
    const res = await fetch('https://api.npoint.io/6e169b8a15676575ddeb/categorias')

    if (!res.ok) {
        throw new Error('Não foi possível obter as categorias')
    }

    const categorias: Categoria[] = await res.json()

    return categorias
}

export default async function Home() {
    const produtos = await fetchProdutos()
    const categorias = await fetchCategorias()

    return (
        <>
            <main className={styles.main}>
                <Categorias categorias={categorias} />
                <Produtos produtos={produtos} />
            </main>
        </>
    )
}
