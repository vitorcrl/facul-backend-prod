const express = require("express");
const ProdutoController = require("../controllers/prodControler");
const router = express.Router();

router.post("/produto", ProdutoController.Insert);
router.get("/produto", ProdutoController.SelectAll);
router.get("/produto/:id", ProdutoController.SelectDetail);
router.put("/produto/:id", ProdutoController.Update);
router.delete("/produto/:id", ProdutoController.Delete);

module.exports = router;
// subir servidor node index.js
