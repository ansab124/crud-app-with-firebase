const express = require("express");
const { getProducts, createProducts, getProductById, updateProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router();

router.route("/").get(getProducts);
router.route("/create").post( createProducts);
router.route("/:id").get(getProductById);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(deleteProduct);
  
module.exports = router;