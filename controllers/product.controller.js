const Product = require('../models/product.model');
const getProducts = async (req, resp) => {


    try {
        const products = await Product.find({});
        resp.status(200).json(products)

    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
}


const getProduct = async (req, resp) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        resp.status(200).json(product);

    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
};


const createProduct = async (req, resp) => {
    try {
        const product = await Product.create(req.body)
        resp.status(200).json(product);
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, resp) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return resp.status(404).json({ message: "product Not Found" });
        }

        const updatedProduct = await Product.findById(id);
        resp.status(200).json(product);

    } catch (error) {
        resp.status(500).json({ message: error.message })
    }
};

const deleteProduct = async (req, resp) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return resp.status(404).json({ message: "pro not found" })
        }
        resp.status(200).json({ message: "pro delelted succesfully" })
    } catch (error) {
        resp.status(500).json({ message: error.message })
    }

};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}