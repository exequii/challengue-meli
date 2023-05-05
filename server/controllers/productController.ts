const productService = require('../services/productService');

const getProducts = async (req, res) => {
    console.log("hjola")
    try{
        const products = await productService.getProductsByQuery(req.params.query);
        if(!products){
            res.status(404).json({ message: 'Products not found' });
        }
        res.status(200).json(products);
    }catch(e){
        res.status(500).json({ message: 'Internal server error'});
    }
}

const getProductById = async (req, res) => {
    try{
        const products = await productService.getProductsByQuery(req.params.id);
        if(!products){
            res.status(404).json({ message: 'Products not found' });
        }
        res.status(200).json(products);
    }catch(e){
        res.status(500).json({ message: 'Internal server error' });
    }
}  


module.exports = { getProducts , getProductById }