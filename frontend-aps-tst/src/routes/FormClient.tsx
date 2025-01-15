import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schemaRegister from "../utils/ShemaRegister";
import { optionsUF } from "../utils/UFoptions";
import { useLocation } from "react-router-dom";
import { Pessoa } from "../utils/ShemaRegister";


function FormClient() {

  const location = useLocation()
  const state = location.state as Pessoa

  const {
    control,
    handleSubmit,
  } = useForm({resolver: zodResolver(schemaRegister), defaultValues: state? {
    nome:state.nome,
    nomeFantasia: state.nomeFantasia,
    cnpj: state.cnpj,
    cep: state.cep,
    cidade: state.cidade,
    UF: {label:"" , value:state.UF},
    logradouro: state.logradouro,
    bairro: state.bairro,
    complemento:state.complemento ,
    email: state.email,
    telefone: state.telefone,
  } : {
    nome:"",
    nomeFantasia: "",
    cnpj: "",
    cep: "",
    cidade: "",
    UF: null,
    logradouro: "",
    bairro: "",
    complemento:"" ,
    email: "",
    telefone: "",
  } });

   function getForm<PessoaField>(userData: PessoaField){
    console.log(userData) 
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
          render={({ field , fieldState}) => (
            <TextField {...field} label="CNPJ" variant="filled"  helperText={fieldState.error?.message}/>
          )}
        />
        <Controller
          name="nome"
          control={control}
          render={({ field , fieldState}) => (
            <TextField {...field} label="Nome" variant="filled" helperText={fieldState.error?.message} />
          )}
        />
        <Controller
          name="nomeFantasia"
          control={control}
          render={({ field , fieldState }) => (
            <TextField {...field} label="Nome fantasia" variant="filled" helperText={fieldState.error?.message} />
          )}
        />
        <Controller
          name="cep"
          control={control}
          render={({ field , fieldState }) => (
            <TextField {...field} label="Cep" variant="filled"  helperText={fieldState.error?.message} />
          )}
        />
        <Controller
          name="logradouro"
          control={control}
          render={({ field , fieldState }) => (
            <TextField {...field} label="Logradouro" variant="filled" helperText={fieldState.error?.message} />
          )}
        />
        <Controller
          name="bairro"
          control={control}
          render={({ field, fieldState }) => (
            <TextField {...field} label="Bairro" variant="filled"  helperText={fieldState.error?.message} />
          )}
        />
        <Controller
          name="cidade"
          control={control}
          render={({ field, fieldState}) => (
            <TextField {...field} label="Cidade" variant="filled"  helperText={fieldState.error?.message} />
          )}
        />
        <Controller
          name="UF"
          control={control}
          render={({ field, fieldState}) => (
            <Autocomplete
            options={optionsUF}
            value={field.value}
            onChange={(_, value) => field.onChange(value)}
            renderInput={(parms) =>(
              <TextField {...parms} label="UF" variant="filled"  helperText={fieldState.error?.message} />
            )}/>
          )}
        />
        <Controller
          name="complemento"
          control={control}
          render={({ field, fieldState }) => (
            <TextField {...field} label="Complemento" variant="filled"  helperText={fieldState.error?.message} />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field , fieldState }) => (
            <TextField {...field} label="Email" variant="filled"   helperText={fieldState.error?.message} />
          )}
        />
        <Controller
          name="telefone"
          control={control}
          render={({ field, fieldState }) => (
            <TextField {...field} label="Telefone" variant="filled"  helperText={fieldState.error?.message} />
          )}
        />
        <Button type="submit" variant="contained">
          {state? "Editar" : "Enviar"}
        </Button>
      </Box>
    </>
  );
}

export default FormClient;
