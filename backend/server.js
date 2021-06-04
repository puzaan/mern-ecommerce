// const express = require('express');
// 

// const products =require("./data/products.js");

// const cors = require("cors");
// const dotenv = require('dotenv');

// After adding "type": "model" in pac.json we can do like this


import express from 'express';
import products from './data/products.js';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import colors from 'colors'

import productRoutes from './routes/productRoutes.js'

dotenv.config();


connectDB();

const app = express();
// to run both server
app.use(cors());



app.get('/',(req, res) => {
    res.send('API Server  is working')
}
);
// while using hard code data from data/products.js
// app.get('/api/products', (req, res) => {
//     res.json(products)
// }); 

// app.get('/api/products/:id', (req, res)=>{
//     const product = products.find((p)=> p._id === req.params.id);
//     res.json(product);
// });


// from mongoose database



app.use('/api/products', productRoutes);




const PORT = process.env.PORT || 5000

//this run server

app.listen(PORT, console.log(`server is running on port ${PORT}`.yellow.bold))