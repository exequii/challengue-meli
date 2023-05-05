//const product = require('../models/product');

const getProductsByQuery = async () => {
    try{
        return [{id:1,name:'product1'},{id:2,name:'product2'}]
    }catch(e){

    }
}

const getProductsById = async () => {
    try{
        return [{id:1,name:'product1'}]
    }catch(e){
        
    }
}

module.exports = { getProductsByQuery , getProductsById }