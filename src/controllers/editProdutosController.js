const Categorias = require("../models/Categorias");
const Produtos = require("../models/Produtos");

const editProduto = async (req, res) => {
    const { descricao, valorVarejo, valorAtacado, categoriaId } = req.body;
    const findProdutoId = await Produtos.findByPk(req.params.id);
    const findCategoriaId = await Categorias.findByPk(categoriaId);

    if (findProdutoId) {
        if (!findCategoriaId) {
            return res.json({ mensagem: "Esse ID não existe." })
        } else {
            await Produtos.update({ descricao, valorVarejo, valorAtacado, categoriaId: findCategoriaId.categoriaId }, { where: { id: req.params.id } });
            return res.json({ mensagem: "O produto foi atualizado com sucesso." });
        }
    } else {
        return res.json({ mensagem: "Não há nenhum produto com esse ID." });
    }
}

module.exports = {
    editProduto
};