const express = require("express");
const mySql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const status500 = "Erro ao conectar ao banco de dados";
const status200 = "Conexão com o banco de dados bem-sucedida";


module.exports = { express, mySql, app, port, status500, status200, cors };
