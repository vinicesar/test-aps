import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "0.0.0.0",
    port: 5434,
    username:"postgres",
    password: "postgres",
    database:"postgres",
    synchronize: true, 
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: ["src/migration/*.ts"],
    subscribers: []
})
