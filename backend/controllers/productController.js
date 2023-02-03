const Product = require("../model/productModal");

const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

const createProducts = async (req, res) => {
    const { product_Name, product_Description, product_Title, product_Quantity, category } = req.body;

    if (!product_Name || !product_Description || !product_Title || !product_Quantity ) {
        res.status(400);
        throw new Error("Please fill all the fields");
    } else {
        const product = new Product({ product_Name, product_Description, product_Title, product_Quantity, category });

        const createdProduct = await product.save();

        res.status(201).json(createdProduct);

    }
};

const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    }
    else {

        res.status(404).json({ message: "Product not found" });

    }
};

const updateProduct = async (req, res) => {
    const { product_Name, product_Description, product_Title, product_Quantity, category } = req.body;

    const product = await Product.findById(req.params.id);


    if (product) {
        product.product_Name = product_Name;
        product.product_Description = product_Description;
        product.product_Title = product_Title;
        product.product_Quantity= product_Quantity;
        product.category= category;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
}

const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
  
  
    if (product) {
      await product.remove();
      res.json({ message: "Product Removed" });
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  }

module.exports = { getProducts, createProducts, getProductById, updateProduct, deleteProduct };