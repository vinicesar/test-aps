import { createContext, ReactNode, useContext, useState } from "react";
import { Pessoa } from "../utils/ShemaRegister";

type PessoaEdicaoContext = {
    pessoaEdicao: Pessoa | null,
    setPessoaEdicao: (pessoa: Pessoa) => void;
} | null

export const PessoaContextRoot = createContext<PessoaEdicaoContext>(null)

export const useEdicaoContext = (): NonNullable<PessoaEdicaoContext> => {

    const PessoaContext = useContext(PessoaContextRoot)
    
    if(!PessoaContext){
        throw new Error 
    }
    return(PessoaContext)
    
}


export const Apiprovider = ({ children } : {children: ReactNode}) => {
    
    const [pessoaEdicao, setPessoaEdicao] = useState<Pessoa | null>(null)
    return(
        <PessoaContextRoot.Provider value={{pessoaEdicao , setPessoaEdicao }}>{children}</PessoaContextRoot.Provider>
    )



}