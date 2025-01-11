import {  z } from 'zod'
import { schemaPostPessoa } from '../routes';
import { AppDataSource } from '../data-source';
import { Pessoa } from '../entity/Pessoa';

export async function  editPessoa(id: number, pessoaInfo: z.infer<typeof schemaPostPessoa>){
    const pessoaRepository = AppDataSource.getRepository(Pessoa)
    const pessoaEditada = await pessoaRepository.update({ id }, pessoaInfo)
   
    return pessoaEditada
}