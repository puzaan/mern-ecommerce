import express from 'express';
import {getProductById, getproducts} from '../controllers/productController.js'



const router = express.Router();

router.get('/', getproducts);



router.get('/:id', getProductById)

export default router;