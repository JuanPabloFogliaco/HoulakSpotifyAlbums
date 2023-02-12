import sequelize from "./connection";
import express from "express";
import { Application } from "express";
import Router from "./routes/index";

const app: Application = express();

const bodyParser = require("body-parser");

app.use(express.json())

const expressSwagger = require("express-swagger-generator")(app);

const cors = require("cors");

let options = {
  swaggerDefinition: {
    info: {
      description: "Aira API",
      title: "Swagger",
      version: "1.0.0",
    },
    host: "localhost:8080",
    basePath: "/api/v1",
    produces: ["application/json", "application/xml"],
    schemes: ["http", "https"],
    securityDefinitions: {
      JWT: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: "",
      },
    },
  },
  basedir: __dirname, //app absolute path
  files: ["./routes/index.ts"], //Path to the API handle folder
};
expressSwagger(options);

app.use(bodyParser.json());

app.use(cors());

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  next();
});

app.use("/api/v1", Router);

app.listen(8080, () => {
  console.log(`App runing at http://0.0.0.0:8080`);
  sequelize
    .authenticate()
    .then(async () => {
      console.log("database connected");
      try {
        await sequelize.sync({ force: false, alter: true });
        
      } catch (error) {
        console.log("Error", error);
      }
    })
    .catch((e: any) => {
      console.log(e.message);
    });
});