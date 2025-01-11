import { AppDataSource } from "../data-source";
import { Pessoa } from "../entity/Pessoa";

export async function deletePessoa(id:number) {
    const pessoaRepository = AppDataSource.getMongoRepository(Pessoa)
    const pessoaDeletada = await pessoaRepository.delete(id)

    return pessoaDeletada
}