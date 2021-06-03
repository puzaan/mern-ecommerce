const express = require('express');
const app = express();

const products =require("./data/products.js");

const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();


// to run both server
app.use(cors());



app.get('/',(req, res) => {
    res.send('API Server  is working')
}
);

app.get('/api/products', (req, res) => {
    res.json(products)
});
app.get('/api/products/:id', (req, res)=>{
    const product = products.find((p)=> p._id === req.params.id);
    res.json(product);
});


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is running on port ${PORT}`))