const { express, app, port, status500, status200 } = require("./constantes");
const { conexao } = require("./banco");
app.get("/", (req, res) => {
    return res.status(200).json({ message: "API da Urna Eletrônica" });
});
app.get("/partidos", (req, res) => {
  const query = 'SELECT * FROM partidos';
  conexao.query(query, (err, results) => {
    if(err) {
      console.log(status500);
      return res.status(500).json({ error: 'Erro ao buscar partidos' });
    }
    console.log(status200);
    return res.status(200).json(results);
  });
});
app.get("/partidos/:id", (req, res) => {
    const partidoId = req.params.id;
    const query = 'SELECT * FROM partidos WHERE id = ?';
    conexao.query(query, [partidoId], (err, results) => {
      if(err) {
        console.log(status500);
        return res.status(500).json({ error: 'Erro ao buscar partido' });
      }
      console.log(status200);
      return res.status(200).json(results);
    });
});
app.get("/chapas", (req, res) => {
    const query = 'SELECT * FROM chapas';
    conexao.query(query, (err, results) => {
      if(err) {
        console.log(status500);
        return res.status(500).json({ error: 'Erro ao buscar chapas' });
      }
      console.log(status200);
      return res.status(200).json(results);
    });
});
app.get("/chapas/:id", (req, res) => {
    const chapaId = req.params.id;
    const query = 'SELECT * FROM chapas WHERE id = ?';
    conexao.query(query, [chapaId], (err, results) => {
      if(err) {
        console.log(status500);
        return res.status(500).json({ error: 'Erro ao buscar chapa' });
      }
      console.log(status200);
      return res.status(200).json(results);
    });
});
app.get("/votos", (req, res) => {
  const query = 'SELECT * FROM votos';
    conexao.query(query, (err, results) => {
        if(err) {
            console.log(status500);
            return res.status(500).json({ error: 'Erro ao buscar votos' });
        }
        console.log(status200);
        return res.status(200).json(results);
    });
});
app.get("/votos/:id", (req, res) => {
    const votoId = req.params.id;
    const query = 'SELECT * FROM votos WHERE id = ?';   
    conexao.query(query, [votoId], (err, results) => {
        if(err) {
            console.log(status500);
            return res.status(500).json({ error: 'Erro ao buscar voto' });
        }
        console.log(status200);
        return res.status(200).json(results);
    });
});
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});