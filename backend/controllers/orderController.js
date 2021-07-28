import catchAsyncs from 'express-async-handler'
import Order from '../models/orderModel.js'

//@des create new order
//@route POST /api/order
//@acces private


const addOrderItems = catchAsyncs(async (req, res)=>{
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    }= req.body;

    if(orderItems && orderItems.length ===0){
        res.status(400)
        throw new Error("no Order Items");
        return
    }else{
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            totalPrice
        })
        const createOrder = await order.save();
        res.status(201).json(createOrder)
    }
})

export {addOrderItems}