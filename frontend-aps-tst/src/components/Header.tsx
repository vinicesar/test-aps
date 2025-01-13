import { Link } from "react-router-dom"


function  Header(){
    return(
        <>
        <header style={{
            display: "flex", 
            gap: "1rem",
            width: "100%"
        }}>
            <Link to="/">Cadastro</Link>
            <Link to="/list">Lista de Clientes</Link>
        </header>
        <hr />
        </>
    )
        
}

export default Header