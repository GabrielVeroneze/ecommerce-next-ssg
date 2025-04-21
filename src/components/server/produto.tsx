import { getProdutoPorSlug } from '@/lib/api'

interface DetalheDoProdutoProps {
    slug: string
}

export const DetalheDoProduto = async ({ slug }: DetalheDoProdutoProps) => {
    const produto = getProdutoPorSlug(slug)

    if (!produto) {
        return <p>Produto não encontrado.</p>
    }

    return (
        <section>
            <h1>{produto.nome}</h1>
            <p>{produto.descricao}</p>
            <p>{produto.preco}</p>
        </section>
    )
}
