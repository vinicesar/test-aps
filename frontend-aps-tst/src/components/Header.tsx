import { Link } from "react-router-dom"


function Header() {
    return (
        <>
            <header style={{
                display: "flex",
                gap: "1rem",
                width: "100%"
            }}>
                <Link to="/">Lista de Clientes</Link>
                <Link to="/form">Cadastro</Link>
            </header>
            <hr />
        </>
    )

}

export default Header
