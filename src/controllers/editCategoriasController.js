const Categorias = require("../models/Categorias");

const editCategorias = async (req, res) => {
  const { nome, descricao } = req.body;
  const findCategoriaId = await Categorias.findByPk(req.params.id);

  if (findCategoriaId) {
    if (nome && descricao !== null) {
      const categoriaUpdate = await Categorias.update({
        nome,
        descricao,
      }, { where: { categoriaId: req.params.id } });
      return res.json({ mensagem: "A categoria foi alterada com sucesso!" });
    }
  }

  return res.json({ mensagem: "A categoria não pôde ser alterada!" });
}

module.exports = {
  editCategorias
};