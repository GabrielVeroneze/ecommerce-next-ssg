import { NextResponse } from 'next/server'
import { getTodosProdutos } from '@/lib/api'

export const dynamic = 'force-static'

export async function GET() {
    const produtos = getTodosProdutos()

    return NextResponse.json(produtos)
}
