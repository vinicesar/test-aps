import express from "express";
import { AppDataSource } from "./data-source";
import { PessoaRouter } from "./routes";
const app = express();

app.use(express.json()); 
app.use(PessoaRouter)

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((error) => console.error("Error during Data Source initialization:", error));
