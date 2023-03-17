const Categorias = require("../models/Categorias");

const listarCategorias = async (req, res) => {
    const categoriaData = [];

    const categorias = await Categorias.findAll();
    categorias.forEach(categoria => categoriaData.push(categoria));
    return res.json({
        categoriaData
    });
}

module.exports = { listarCategorias };