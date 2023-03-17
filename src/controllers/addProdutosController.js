const Produtos = require("../models/Produtos");
const Categorias = require("../models/Categorias");

const addProduto = async (req, res) => {
  const { descricao, valorVarejo, valorAtacado, categoriaId } = req.body;

  const produtoExiste = await Produtos.findOne({
    where: {
      descricao: descricao,
    },
  });

  if (!produtoExiste) {
    if (descricao && valorVarejo && valorAtacado && categoriaId !== null) {
      const findCategoriaId = await Categorias.findOne({
        where: {
          categoriaId: categoriaId,
        },
      });
      if (findCategoriaId) {
        const produtoCreated = await Produtos.create({
          descricao: descricao,
          valorVarejo: valorVarejo,
          valorAtacado: valorAtacado,
          categoriaId: findCategoriaId.categoriaId
        });
        return res.json({ mensagem: "O produto foi adicionado com êxito." });
      }

      return res.json({ mensagem: "A chave da categoria não é válida ou não existe." });
    }
  }

  return res.json({ mensagem: "Essa descrição já foi registrada anteriormente." });
};

module.exports = {
  addProduto,
};