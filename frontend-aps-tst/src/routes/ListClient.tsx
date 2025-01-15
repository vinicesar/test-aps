import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import { Pessoa } from "../utils/ShemaRegister";
import { Link } from "react-router-dom";


const rows = [
    {
        nome: 'Empresa1',
        nomeFantasia: 'Empresa1',
        cnpj: '12.345.678/9000-00',
        cep: '50000-000',
        cidade: 'Recife',
        UF: 'PE',
        logradouro: 'Rua A',
        bairro: 'Bairro A',
        complemento: 'Complemento A',
        email: 'empresa1@example.com',
        telefone: '(81) 1234-5678',
    },
    {  
        nome: 'Empresa2',
        nomeFantasia: 'Empresa2',
        cnpj: '23.456.789/0123-45',
        cep: '50010-000',
        cidade: 'Olinda',
        UF: 'PE',
        logradouro: 'Rua B',
        bairro: 'Bairro B',
        complemento: 'Complemento B',
        email: 'empresa2@example.com',
        telefone: '(81) 2345-6789',
    },
    {
        nome: 'Empresa3',
        nomeFantasia: 'Empresa3',
        cnpj: '34.567.890/1234-56',
        cep: '50020-000',
        cidade: 'Jaboatão',
        UF: 'PE',
        logradouro: 'Rua C',
        bairro: 'Bairro C',
        complemento: 'Complemento C',
        email: 'empresa3@example.com',
        telefone: '(81) 3456-7890',
    },
    {
        nome: 'Empresa4',
        nomeFantasia: 'Empresa4',
        cnpj: '45.678.901/2345-67',
        cep: '50030-000',
        cidade: 'Paulista',
        UF: 'PE',
        logradouro: 'Rua D',
        bairro: 'Bairro D',
        complemento: 'Complemento D',
        email: 'empresa4@example.com',
        telefone: '(81) 4567-8901',
    },
    {
        nome: 'Empresa5',
        nomeFantasia: 'Empresa5',
        cnpj: '56.789.012/3456-78',
        cep: '50040-000',
        cidade: 'Camaragibe',
        UF: 'PE',
        logradouro: 'Rua E',
        bairro: 'Bairro E',
        complemento: 'Complemento E',
        email: 'empresa5@example.com',
        telefone: '(81) 5678-9012',
    },
    { 
        nome: 'Empresa6',
        nomeFantasia: 'Empresa6',
        cnpj: '67.890.123/4567-89',
        cep: '50050-000',
        cidade: 'São Lourenço',
        UF: 'PE',
        logradouro: 'Rua F',
        bairro: 'Bairro F',
        complemento: 'Complemento F',
        email: 'empresa6@example.com',
        telefone: '(81) 6789-0123',
    },
    {   
        nome: 'Empresa7',
        nomeFantasia: 'Empresa7',
        cnpj: '78.901.234/5678-90',
        cep: '50060-000',
        cidade: 'Igarassu',
        UF: 'PE',
        logradouro: 'Rua G',
        bairro: 'Bairro G',
        complemento: 'Complemento G',
        email: 'empresa7@example.com',
        telefone: '(81) 7890-1234',
    },
    
]

function ListClient() {
    const [listPessoas, setListPessoas] = useState<Pessoa[]>(rows)
    //const { pessoaEdicao } = useEdicaoContext()

    
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
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
                <TableRow>
                    <TableCell>{p.cnpj}</TableCell>
                    <TableCell>{p.nome}</TableCell>
                    <TableCell>{p.bairro}</TableCell>
                    <TableCell>{p.cidade}</TableCell>
                    <TableCell>{p.UF}</TableCell>
                    <TableCell>{p.email}</TableCell>
                    <TableCell>
                      <Link  to={'/'} state={p}>
                        <Button  size="small" variant="contained">
                        Editar
                        </Button>
                      </Link>
                        <Button style={{margin: "0 .2rem"}} size="small" variant="contained"color="error">Deletar</Button>
                        </TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}

export default ListClient;
