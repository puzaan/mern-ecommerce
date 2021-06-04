import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors'
import users from './data/user.js'
import products from './data/products.js'
import connectDB from './config/db.js'
import Order from './models/orderModel.js';
import Product from './models/productModel.js';
import User from './models/userModel.js'

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();


        const createdUser = await User.insertMany(users);
        const adminUser = createdUser[0]._id;

        const sampleProducts = products.map((product) =>{
            return {...product, user:adminUser}
        });

        const createdProducts = await Product.insertMany(sampleProducts);
        console.log('Data Imporded!')

    } catch (err) {
        console.error(`${err}` .red.bgBlack);
        process.exit(1);
        
    }
};

importData();