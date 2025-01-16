import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { Pessoa } from "../utils/ShemaRegister";
import { Link } from "react-router-dom";
import { appAxios } from "../services/config";

function ListClient() {
    const [listPessoas, setListPessoas] = useState<Pessoa[]>([])

    async function getPessoas() {
        const response = await appAxios.get('/')

        if (response.data.data) {
            setListPessoas(response.data.data)
        }
    }

    async function handleDelete(id: number) {
        const response = await appAxios.delete(`/${id}`)

        if (response.data.success) {
            getPessoas()
        }

        return response
    }

    useEffect(() => {
        getPessoas()
    }, [])

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>CNPJ</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>Bairro</TableCell>
                        <TableCell>Cidade</TableCell>
                        <TableCell>UF</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Funcoes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listPessoas.map(p => (
                        <TableRow key={p.id}>
                            <TableCell>{p.id}</TableCell>
                            <TableCell>{p.cnpj}</TableCell>
                            <TableCell>{p.nome}</TableCell>
                            <TableCell>{p.bairro}</TableCell>
                            <TableCell>{p.cidade}</TableCell>
                            <TableCell>{p.UF}</TableCell>
                            <TableCell>{p.email}</TableCell>
                            <TableCell>
                                <Link to={'/form'} state={p}>
                                    <Button size="small" variant="contained">
                                        Editar
                                    </Button>
                                </Link>
                                <Button style={{ margin: "0 .2rem" }}
                                    onClick={() => handleDelete(p.id!)}
                                    size="small" variant="contained" color="error">Deletar</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}

export default ListClient;
