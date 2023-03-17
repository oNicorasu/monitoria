const Produtos = require("../models/Produtos");

const deleteProduto = async (req, res) => {
    const findProduto = await Produtos.findByPk(req.params.id);

    if (findProduto) {
        await Produtos.destroy({
            where: {
                id: req.params.id,
            }
        });
        return res.json({ mensagem: "O produto foi excluído!" })
    }
    return res.json({ mensagem: "Não existe nenhum produto com esse identificador para ser excluído!" });
};

module.exports = {
    deleteProduto
};