const { Sequelize, DataTypes } = require("sequelize");
const db = require("../database/db");

const Categorias = db.define("Categorias", {
    categoriaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    }
})

module.exports = Categorias; 