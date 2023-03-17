const express = require("express");
const router = express.Router();

const indexProdutosController = require("../controllers/indexProdutosController");
const addProdutosController = require("../controllers/addProdutosController");
const editProdutosController = require("../controllers/editProdutosController");
const deleteProdutosController = require("../controllers/deleteProdutosController");

const indexCategoriasController = require("../controllers/indexCategoriasController");
const addCategoriasController = require("../controllers/addCategoriasController");
const editCategoriasController = require("../controllers/editCategoriasController");
const deleteCategoriasController = require("../controllers/deleteCategoriasController");



//index ou busca todos
router.get("/listarprodutos", indexProdutosController.listarProdutos);
router.get("/listarcategoria", indexCategoriasController.listarCategorias);

//adiciona 
router.post("/addproduto", addProdutosController.addProduto);
router.post("/addcategoria", addCategoriasController.addCategorias);

//edita
router.put("/editproduto/:id", editProdutosController.editProduto);
router.put("/editcategoria/:id", editCategoriasController.editCategorias);

//deleta 
router.delete("/deleteproduto/:id", deleteProdutosController.deleteProduto);
router.delete("/deletecategoria/:id", deleteCategoriasController.deleteCategorias);

module.exports = router;