import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

const getproducts =  asyncHandler(async(req, res) =>{
    let products =await Product.find({});
    res.json(products);
});



const getProductById = asyncHandler(async (req, res) => {
    let product = await Product.findById(req.params.id);

    if(product){
        res.json(product);

    }else{
        res.status(404);
        throw new Error ('product Not Founds')
    }
});

export {getproducts, getProductById};