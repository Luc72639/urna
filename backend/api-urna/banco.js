const{mySql, status500, status200} = require("./constantes");
const conexao = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "urna"
});

conexao.connect((err) => {
  if (err) {
    console.log(status500)
  }else {
    console.log(status200)
  }
});

module.exports = {conexao};