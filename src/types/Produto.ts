export interface Produto {
    id: number
    nome: string
    descricao: string
    preco: string
    cores: Cor[]
    tamanho?: string[]
    imageSrc: string
}

export interface Cor {
    nome: string
    hexa: string
}
