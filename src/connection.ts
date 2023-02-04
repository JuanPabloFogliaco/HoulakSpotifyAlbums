import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import Users from "./models/users";
const config = require("./config/config.json");

//const dbConfig = config[process.env.NODE_ENV!];

interface IConfigDB{
    username: string,
    password:string,
    database: string,
    host: string,
    port: number,
    dialect: Dialect
}

const dbConfig: IConfigDB = {
    username: "root",
    password: "Riverplate.anu",
    database: "HoulakSpotifyAlmbumsDB",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql" 
}

const sequelize = new Sequelize(
    dbConfig["database"],
    dbConfig["username"],
    dbConfig["password"],
    dbConfig
);

sequelize.addModels([
    Users
]);

export default sequelize;