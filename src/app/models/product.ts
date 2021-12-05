export class Product {
    id?: number;
    nome?: string;
    quantidade?: number | undefined;
    valor?: number;

    constructor(id?: number, nome?: string, quantidade?: number, valor?: number) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
        this.valor = valor;
    }
}