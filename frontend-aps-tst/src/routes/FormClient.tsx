import { Box, Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schemaRegister from "../utils/ShemaRegister";
import {z} from "zod"

export type PessoaField = z.infer <typeof schemaRegister>

function FormClient() {
  const {
    control,
    handleSubmit,
  } = useForm<PessoaField>({resolver: zodResolver(schemaRegister)});

   function getForm (data: PessoaField){
    console.log(data)
  }

  return (
    <>
      <Box
        onSubmit={handleSubmit(getForm)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: ".7rem",
          color: "whate",
          flexWrap: "wrap",
        }}
      >
        <Controller
          name="cnpj"
          control={control}
          defaultValue=""
          rules={{ required: "CNPJ obrigatorio" }}
          render={({ field }) => (
            <TextField {...field} label="CNPJ" variant="filled" required />
          )}
        />
        <Controller
          name="nome"
          control={control}
          defaultValue=""
          rules={{ required: "Nome e obrigatorio" }}
          render={({ field }) => (
            <TextField {...field} label="Nome" variant="filled" required />
          )}
        />
        <Controller
          name="nomeFantasia"
          control={control}
          defaultValue=""
          rules={{ required: "Nome Fantasia e obrigatorio" }}
          render={({ field }) => (
            <TextField {...field} label="Nome fantasia" variant="filled" required />
          )}
        />
        <Controller
          name="cep"
          control={control}
          defaultValue=""
          rules={{ required: "Cep e obrigatorio" }}
          render={({ field }) => (
            <TextField {...field} label="Cep" variant="filled" required />
          )}
        />
        <Controller
          name="logradouro"
          control={control}
          defaultValue=""
          rules={{ required: "Logradouro e obrigatorio" }}
          render={({ field }) => (
            <TextField {...field} label="Logradouro" variant="filled" required />
          )}
        />
        <Controller
          name="bairro"
          control={control}
          defaultValue=""
          rules={{ required: "Bairro e obrigatorio" }}
          render={({ field }) => (
            <TextField {...field} label="Bairro" variant="filled" required />
          )}
        />
        <Controller
          name="cidade"
          control={control}
          defaultValue=""
          rules={{ required: "Cidade e obrigatorio" }}
          render={({ field }) => (
            <TextField {...field} label="Cidade" variant="filled" required />
          )}
        />{" "}
        <Controller
          name="UF"
          control={control}
          defaultValue=""
          rules={{ required: "UF e obrigatorio" }}
          render={({ field }) => (
            <TextField {...field} label="UF" variant="filled" required />
          )}
        />
        <Controller
          name="complemento"
          control={control}
          defaultValue=""
          rules={{ required: "Complemento e obrigatorio" }}
          render={({ field }) => (
            <TextField {...field} label="Complemento" variant="filled" required />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: "Email e obrigatorio" }}
          render={({ field }) => (
            <TextField {...field} label="Email" variant="filled" required />
          )}
        />
        <Controller
          name="telefone"
          control={control}
          defaultValue=""
          rules={{ required: "Telefone e obrigatorio" }}
          render={({ field }) => (
            <TextField {...field} label="Telefone" variant="filled" required />
          )}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </Box>
    </>
  );
}

export default FormClient;
