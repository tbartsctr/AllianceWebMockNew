const Product = require("./ProductModel");

//Create New Product

const createProduct = async (req, res) => {
    try{
        const {name , description, price, imgUrl} = req.body;

        const newProduct = new Product({
            name,
            description,
            price,
            imgUrl
        });

        await newProduct.save();
        res.status(201).json(newProduct);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating product' });
      }
    };

    //Get Products

    const getProducts = async (req, res) => {
        try {
            const products = await Product.find();
            res.json(products);

        }    catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching products' });
        }
};
    

    module.exports = { createProduct, getProducts };
