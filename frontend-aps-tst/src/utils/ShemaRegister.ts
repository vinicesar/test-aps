import { z } from "zod";
import { validCNPJ } from "./validaCnpj";

export const schemaRegister = z.object({
    cnpj: z
        .string()
        .refine((val) => validCNPJ(val), { message: "cnpj invalido" }).transform(v => v.replace(/\D/g, '')),
    nome: z
        .string()
        .min(1, { message: "Campo Nome e obrigatorio" })
        .max(100, { message: "maximo de 100 caracteres" }),
    nomeFantasia: z
        .string()
        .min(1, { message: "Campo Nome fantasia e obrigatorio" })
        .max(100, { message: "maximo de 100 caracteres" }),
    cep: z
        .string()
        .min(1, { message: "Campo Cep e obrigatorio" })
        .max(10, { message: "maximo de 10 caracteres" }),

    logradouro: z
        .string()
        .min(1, { message: "Campo Logradouro e obrigatorio" })
        .max(100, { message: "maximo de 100 caracteres" }),

    bairro: z
        .string()
        .min(1, { message: "Campo Bairro e obrigatorio" })
        .max(100, { message: "maximo de 100 caracteres" }),

    cidade: z
        .string()
        .min(1, { message: "Campo Cidade e obrigatorio" })
        .max(100, { message: "maximo de 100 caracteres" }),

    UF: z
        .object({ label: z.string(), value: z.string() }, { message: "UF e um campo obrigatorio" })
        .transform((val) => val.value),

    complemento: z
        .string()
        .min(1, { message: "Campo Complemento e obrigatorio" })
        .max(100, { message: "maximo de 100 caracteres" }),

    email: z
        .string().email({ message: "Email invalido" })
        .min(1, { message: "Campo Email e obrigatorio" })
        .max(100, { message: "maximo de 100 caracteres" }),

    telefone: z
        .string()
        .min(1, { message: "Campo Nome e obrigatorio" })
        .max(15, { message: "maximo de 15 caracteres" }),
})

export type PessoaFormInitialValues = z.input<typeof schemaRegister>
export type PessoaFormResult = z.infer<typeof schemaRegister>

export type Pessoa = {
    id?: number,
    nome: string
    nomeFantasia: string
    cnpj: string
    cep: string
    cidade: string
    UF: string
    logradouro: string
    bairro: string
    complemento: string
    email: string
    telefone: string
}


export default schemaRegister
