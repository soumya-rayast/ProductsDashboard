const express = require("express");
const { createProduct, getProducts, deleteProduct } = require("../controller/product.controller.js");
const router = express.Router();

router.post("/create", createProduct); 
router.get("/getAllProducts", getProducts); 
router.delete("/:id", deleteProduct); 

module.exports = router;
