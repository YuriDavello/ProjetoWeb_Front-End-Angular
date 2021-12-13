export class UsersData {
    nome?: string;
    cpf?: string;
    nascimento?: string;
    telefone?: string;

    constructor(nome?: string, cpf?: string, nascimento?: string, telefone?: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.telefone = telefone;
    }
}