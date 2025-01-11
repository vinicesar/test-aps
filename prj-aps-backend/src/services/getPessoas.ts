import { AppDataSource } from "../data-source";
import { Pessoa } from "../entity/Pessoa";

export async function getPessoas() {
    const repositorioPessoa = AppDataSource.getRepository(Pessoa)
    const allPessoas = await repositorioPessoa.find()
    return  allPessoas
}