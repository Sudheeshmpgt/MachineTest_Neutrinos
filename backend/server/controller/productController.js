const ProductModel = require('../model/productSchema')

const addNewProduct = async (req, res) => {
        try {
            const { product_name, product_price, product_information } = req.body;
            const product_image = req.file?.path

            const product = await ProductModel.findOne({ product_name : product_name });
            if (product) {
                res.send({ error: "Product already exists" });
            } else {
                const addProduct = new ProductModel({
                    product_name,
                    product_price,
                    product_information,
                    product_image,
                });
                const newProduct = await addProduct.save();

                res.status(200).send({ message: "Product details added Successfully", product: newProduct });
            }
        } catch (error) {
            res.status(500).send(error);
        }
}

const getAllProducts = async (req, res) => {
    try{
        const products = await ProductModel.find({})
        if(products){
            res.status(200).send({ message: "success", products: products });
        }else{
            res.send({ message: "Products not found" });
        }
    }catch(error){
        res.status(500).send(error)
    }
}

module.exports = {addNewProduct, getAllProducts}