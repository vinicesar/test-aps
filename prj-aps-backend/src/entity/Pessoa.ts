import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pessoa")

export class Pessoa {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 14 })
    cnpj: string

    @Column({ length: 100 })
    nome: string

    @Column({ length: 100 })
    nomeFantasia: string

    @Column({ length: 10 })
    cep: string

    @Column({ length: 100 })
    logradouro: string

    @Column({ length: 100 })
    bairro: string

    @Column({ length: 100 })
    cidade: string

    @Column({ length: 2 })
    UF: string

    @Column({ length: 100 })
    complemento: string

    @Column({ length: 100 })
    email: string

    @Column({ length: 15 })
    telefone: string
}
