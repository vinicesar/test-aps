import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("pessoa") 

export class Pessoa {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    cnpj: string

    @Column()
    nome: string

    @Column()
    nomeFantasia: string

    @Column()
    cep: string

    @Column()
    logradouro: string

    @Column()
    bairro: string

    @Column()
    cidade: string

    @Column()
    UF: string

    @Column()
    complemento: string

    @Column()
    email:string

    @Column()
    telefone:string
}