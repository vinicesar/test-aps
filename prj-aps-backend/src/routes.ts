import { Router } from "express";
import { z } from "zod";
import { validaCNPJ } from "./utils/cnpj";
import { createPessoa } from "./services/createPessoa";
import { getPessoas } from "./services/getPessoas";
import { editPessoa } from "./services/editPessoa"
import { deletePessoa } from "./services/deletePessoa";

export const schemaPostPessoa = z.object({
  cnpj: z
    .string()
    .refine((val) => validaCNPJ(+val), { message: "cnpj invalido" }),
  nome: z.string().max(100),
  nomeFantasia: z.string().max(100),
  cep: z.string().length(10),
  logradouro: z.string().max(100),
  bairro: z.string().max(100),
  cidede: z.string().max(100),
  UF: z.string().length(2),
  complemento: z.string().max(100),
  email: z.string().max(100),
  telefone:z.string().max(15),
});

export const PessoaRouter = Router();
PessoaRouter.get("/", async (req, res) => {
  try {
    const todasAsPessoas = await getPessoas()
    res.status(200).json({
      data:todasAsPessoas,
      success: true
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: "Erro ao procurar pessoas",
      success: false
    })
  }
}); 

PessoaRouter.post("/", async (req, res) => {
  const result = schemaPostPessoa.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ message: "Dados incorretos" });
    return;
  }

  try {
    const pessoa = await createPessoa(result.data);
    res.status(200).json({
      data: pessoa,
      success: true,
    });
  } catch (error) {
      res.status(500).json({
      error , 
      message: "Erro ao cadastrar cliente",
      success: false
      })
  }
}); 

PessoaRouter.put("/:id", async (req, res) => {

  const resultValidationBody = schemaPostPessoa.safeParse(req.body);
  const resultValidationParams = z.object({ id: z.coerce.number().min(1)}).safeParse(req.params)

  if (!resultValidationBody.success) {
    res.status(400).json({ message: "Dados incorretos" });
    return;
  }

  if (!resultValidationParams.success) {
    res.status(400).json({ message: "Id invalido" });
    return;
  }

  try {
    const pessoaEditada = await editPessoa(resultValidationParams.data.id,resultValidationBody.data);

    res.status(200).json({
      data: pessoaEditada,
      success: true,
    });
  } catch (error) {
      res.status(500).json({
      error , 
      message: "Erro ao editar cliente",
      success: false
      })
  }
}); 

PessoaRouter.delete("/:id", async (req, res) => {
  const idPessoaDeletada = z.object({ id: z.coerce.number().min(1)}).safeParse(req.params)

   if (!idPessoaDeletada.success) {
    res.status(400).json({ message: "Id invalido" });
    return;
  }
  try {
    const pessoaDeletada = await deletePessoa(idPessoaDeletada.data.id)
    res.status(200).json({
      data: pessoaDeletada,
      success: true
    })
  } catch (error) {
    res.status(500).json({
      error,
      message: "Erro ao apagar pessoa",
      success: false
    })
  }

}); 
