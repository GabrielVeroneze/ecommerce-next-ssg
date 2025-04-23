import { NextRequest, NextResponse } from 'next/server'
import { getTodosProdutos } from '@/lib/api'

interface RouteParams {
    params: Promise<{ slug: string }>
}

export async function GET(_request: NextRequest, context: RouteParams) {
    const { slug } = await context.params

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
