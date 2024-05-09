const express = require("express");
const { createProduct, getProducts, getProduct, deleteProduct, updatedProduct  } = require("../controllers/productController");
const router = express.Router()






router.get("/", getProducts );
router.get("/:id",getProduct);
router.post("/",createProduct);
router.delete("/:id",deleteProduct);
router.put("/:id", updatedProduct )





module.exports = router;