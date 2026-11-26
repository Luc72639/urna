const express = require("express");
const mySql = require("mysql2");

const app = express();
const port = 3000;

app.use(express.json());

const status500 = "Erro ao conectar ao banco de dados";
const status200 = "Conexão com o banco de dados bem-sucedida";


module.exports = { express, mySql, app, port, status500, status200  }; 
