const { Sequelize, DataTypes } = require("sequelize");
const db = require("../database/db");
const Categorias = require("./Categorias");

const Produtos = db.define("Produtos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING
    },
    valorVarejo: {
        type: DataTypes.DECIMAL
    },
    valorAtacado: {
        type: DataTypes.DECIMAL
    }
})

Produtos.belongsTo(Categorias, {
    foreignKey: 'categoriaId'
});

module.exports = Produtos;