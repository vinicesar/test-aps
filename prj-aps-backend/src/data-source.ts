import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "172.17.0.2",
    port: 5432,
    username:"postgres",
    password: "docker",
    database:"postgres",
    synchronize: true, 
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: ["src/migration/*.ts"],
    subscribers: []
})