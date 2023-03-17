const Categorias = require("../models/Categorias");

const addCategorias = async (req, res) => {
  const { nome, descricao } = req.body;

  const categoriaExiste = await Categorias.findOne({
    where: {
      nome: nome,
    },
  });

  if (!categoriaExiste) {
    if (nome && descricao !== null) {
      const categoriaCreated = await Categorias.create({
        nome: nome,
        descricao: descricao,
      });
      return res.json({ mensagem: "Inserção da categoria foi um sucesso." });
    } else {
      return res.json({ mensagem: "É inválido deixar os valores vazios." });
    }
  }
  return res.json({ mensagem: "Esse nome já foi registrado anteriormente." });
};

module.exports = {
  addCategorias,
};
