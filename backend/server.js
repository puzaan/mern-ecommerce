const express = require('express');
const app = express();

const products =require("./data/products.js");

const cors = require("cors");


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

app.listen(5000, console.log('server is running on port 5000'))