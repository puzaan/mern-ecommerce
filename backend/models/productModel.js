import mongoose from "mongoose"


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    comment: {
        type: String,
        required: true
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
        // "User" came from userModel const User"
    },
    image: {
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        default: 0,
    },
    countInStock:{
        type: Number,
        required: true,
        default: 0
    }

},{
    timeStamp:true,
})


const Product = mongoose.model("product", productSchema);
export default Product