import {z} from "zod"
import { schemaPostPessoa } from "../routes"
import { AppDataSource } from "../data-source"
import { Pessoa } from "../entity/Pessoa"

type pessoaType = z.infer<typeof schemaPostPessoa>

export async function createPessoa(pessoaParams: pessoaType){
    const repositorioPessoa = AppDataSource.getRepository(Pessoa)
    const pessoaCriada = await repositorioPessoa.insert(pessoaParams)
    return pessoaCriada
}
