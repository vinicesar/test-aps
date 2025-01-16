import { Autocomplete, Grid2 as Grid, Button, TextField } from "@mui/material";
import { Controller, useForm, Form } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schemaRegister, { PessoaFormInitialValues, PessoaFormResult } from "../utils/ShemaRegister";
import { optionsUF } from "../utils/UFoptions";
import { useLocation, useNavigate } from "react-router-dom";
import { Pessoa } from "../utils/ShemaRegister";
import { appAxios } from "../services/config";
import { useEffect } from "react";
import { handleCNPJFetch } from "../services/getCnpj";
import { handleCepFetch } from "../services/getCep";


function FormClient() {
    const location = useLocation()
    const state = location.state as Pessoa | undefined

    const navigate = useNavigate()

    const {
        control,
        watch,
        formState: { errors },
        getValues,
        reset
    } = useForm({
        resolver: zodResolver(schemaRegister), defaultValues: state ? {
            ...state,
            UF: optionsUF.find(opt => opt.value === state.UF)!
        } : {
            nome: "testando vini",
            nomeFantasia: "testandoop",
            cnpj: "13.681.235/0001-38",
            cep: "51190-610",
            cidade: "recife",
            UF: { label: "PERNAMBUCO", value: "PE" },
            logradouro: "Rua tua mae",
            bairro: "ai dentooooooooooo",
            complemento: "aseiajaksdjas",
            email: "email@email.com",
            telefone: "5581994147153",
        }
    });

    async function handleSubmit(userData: Pessoa) {
        const methodToUse = state ? 'put' : 'post'

        const response = await appAxios[methodToUse](state ? `/${state.id}` : '/', userData)

        if (response.data.success) {
            navigate('/')
        }
    }

    const cnpj = watch('cnpj')

    const cep = watch('cep')

    useEffect(() => {
        const cnpjApenasNum = cnpj?.replace(/\D/g, '')

        if (cnpjApenasNum?.length === 14 && !errors.cnpj) {
            handleCNPJFetch(cnpjApenasNum).then(res => {
                if (res.erro) {
                    return
                }

                const { razao_social, estabelecimento } = res

                reset({
                    ...getValues(),
                    nome: razao_social || '',
                    bairro: estabelecimento?.bairro || '',
                    cidade: estabelecimento?.cidade?.nome || '',
                    complemento: estabelecimento?.complemento || '',
                    email: estabelecimento?.email || '',
                    UF: estabelecimento?.estado?.sigla ? optionsUF.find(opt => opt.value === estabelecimento.estado.sigla) : undefined,
                    nomeFantasia: estabelecimento?.nome_fantasia || '',
                    telefone: estabelecimento?.telefone1 || estabelecimento?.telefone2 || '',
                    logradouro: estabelecimento?.logradouro || '',
                    cep: estabelecimento?.cep || '',
                })

            })


        }
    }, [cnpj, errors.cnpj])


    useEffect(() => {
        const cepApenasNum = cep?.replace(/\D/g, '')

        if (cepApenasNum?.length === 8 && !errors.cep) {
            handleCepFetch(cepApenasNum).then(res => {
                if (res.data.success) {
                    const response = res.data.data

                    reset({
                        ...getValues(),
                        bairro: response.bairro || '',
                        complemento: response.complemento || '',
                        UF: response.uf ? optionsUF.find(opt => opt.value === response.uf) : undefined,
                        cidade: response.localidade || '',
                        logradouro: response.logradouro || '',
                    })
                }
            })
        }
    }, [cep, errors.cep])

    return (
        <>
            <Form<PessoaFormInitialValues, PessoaFormResult> control={control} onSubmit={({ data }) => { handleSubmit(data) }}>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Controller
                            name="cnpj"
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    label="CNPJ"
                                    variant="filled"
                                    helperText={fieldState.error?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid size={6}>
                        <Controller
                            name="nome"
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextField {...field} fullWidth label="Nome" variant="filled" helperText={fieldState.error?.message} />
                            )}
                        />
                    </Grid>
                    <Grid size={6}>
                        <Controller
                            name="nomeFantasia"
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextField {...field} fullWidth label="Nome fantasia" variant="filled" helperText={fieldState.error?.message} />
                            )}
                        />
                    </Grid>
                    <Grid size={6}>
                        <Controller
                            name="cep"
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextField {...field} fullWidth label="Cep" variant="filled" helperText={fieldState.error?.message} />
                            )}
                        />
                    </Grid>
                    <Grid size={6}>
                        <Controller
                            name="logradouro"
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextField {...field} fullWidth label="Logradouro" variant="filled" helperText={fieldState.error?.message} />
                            )}
                        />
                    </Grid>
                    <Grid size={6}>
                        <Controller
                            name="bairro"
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextField {...field} fullWidth label="Bairro" variant="filled" helperText={fieldState.error?.message} />
                            )}
                        />
                    </Grid>
                    <Grid size={6}>
                        <Controller
                            name="cidade"
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextField {...field} fullWidth label="Cidade" variant="filled" helperText={fieldState.error?.message} />
                            )}
                        />
                    </Grid>
                    <Grid size={6}>
                        <Controller
                            name="UF"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Autocomplete
                                    options={optionsUF}
                                    value={field.value}
                                    onChange={(_, value) => field.onChange(value)}
                                    renderInput={(parms) => (
                                        <TextField {...parms} fullWidth label="UF" variant="filled" helperText={fieldState.error?.message} />
                                    )} />
                            )}
                        />
                    </Grid>
                    <Grid size={6}>
                        <Controller
                            name="complemento"
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextField {...field} fullWidth label="Complemento" variant="filled" helperText={fieldState.error?.message} />
                            )}
                        />
                    </Grid>
                    <Grid size={6}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextField {...field} fullWidth label="Email" variant="filled" helperText={fieldState.error?.message} />
                            )}
                        />
                    </Grid>
                    <Grid size={6}>
                        <Controller
                            name="telefone"
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextField {...field} fullWidth label="Telefone" variant="filled" helperText={fieldState.error?.message} />
                            )}
                        />
                    </Grid>
                    <Grid size={12}>
                        <Button type="submit" variant="contained">
                            {state ? "Editar" : "Enviar"}
                        </Button>
                    </Grid>
                </Grid >
            </Form>
        </>
    );
}

export default FormClient;
