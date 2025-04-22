import { NextRequest, NextResponse } from 'next/server'
import { getTodosProdutos } from '@/lib/api'

export async function GET(
    request: NextRequest,
    context: { params: { slug: string } }
) {
    const { slug } = context.params

    const produtos = getTodosProdutos()

    if (!produtos) {
        return new Response(null, { status: 404 })
    }

    const produto = produtos.find((produto) =>
        produto.id.toString() === slug
    )

    if (!produto) {
        return new Response(null, { status: 404 })
    }

    return NextResponse.json(produto)
}
