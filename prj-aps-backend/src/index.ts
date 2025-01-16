import express from "express";
import { AppDataSource } from "./data-source";
import { PessoaRouter } from "./routes";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*" }))
app.use(express.json()); // transforma dados enviados como json em um objeto comum js
app.use(PessoaRouter) // passando o esquema de rotas 

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        app.listen(3000, () => console.log("Server running on port 3000"));
    })
    .catch((error) => console.error("Error during Data Source initialization:", error));
