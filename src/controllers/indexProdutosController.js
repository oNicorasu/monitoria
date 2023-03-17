const Produtos = require("../models/Produtos");

const listarProdutos = async (req, res) => {
    const produtoData = [];

    const produtos = await Produtos.findAll();
    produtos.forEach(produto => produtoData.push(produto));
    return res.json({
        produtoData
    });
}

module.exports = { listarProdutos };