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
            totalPrice,
            taxPrice
        })
        const createOrder = await order.save();
        res.status(201).json(createOrder)
    }
})

//des order by id
//rout get /api/order/:id
//acces private

const getOrderById = catchAsyncs(async(req, res) =>{
    const order = await Order.findById(req.params.id)
    .populate('user', "name email");
    if(order){
        res.json(order);
    }else{
        res.status(404);
        throw new Error('Order not found');
    }
})
export {addOrderItems, getOrderById}