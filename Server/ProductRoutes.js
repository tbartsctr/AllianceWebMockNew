const express = require("express");
const router = express.Router();
const { createProduct } = require("./ProductController");
const { getProducts } = require("./ProductController");

router.post("/", createProduct);

router.get("/", getProducts);
module.exports = router;
