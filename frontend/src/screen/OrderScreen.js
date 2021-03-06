import React, { useEffect } from 'react'
import { Card, Col, Image, ListGroup, NavLink, Row,} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import { getOrderDetail } from '../actions/orderAction';
import Loader from '../components/Loder'
import Message from '../components/Message';
const OrderScreen = ({match}) => {
    const orderId = match.params.id;
    const dispatch = useDispatch();
    const orderDetails = useSelector((state)=> state.orderDetails);
    const {order, loading, error} = orderDetails



    
    const itemsPrice =(o) => o.orderItems
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);



    useEffect(()=> {
        dispatch(getOrderDetail(orderId))
    },[match, dispatch, orderId])
    return loading ? (<Loader></Loader>) : error ? (
        <Message variant ='danger'>{error} </Message>
    ):(
        <>
        <h1>Order {orderId} </h1>
        <Row>
            <Col md={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>

                    <h2>Shipping</h2>
                    <p>
                        <strong>Name:</strong>{order.user.name}
                    </p>
                    <p>
                    <strong>Emali:</strong>
                    
                    <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                
                    </p>
                    <p>
                        <strong>Address</strong>
                        {order.shippingAddress.address}, {order.shippingAddress.city},
                                {order.shippingAddress.postalCode},{" "}
                                {order.shippingAddress.country},
                    </p>
                    {order.isDeliverd ? (
                        <Message variant='success'>
                            Deliverd on : {order.deliveredAt}
                        </Message>
                    ): (
                        <Message variant='danger'> Not Delevered</Message>
                    )}

                    </ListGroup.Item>
                            <br>
                            </br>
                            <ListGroup.Item>
                                <h2>Payment Method</h2>
                                <p>
                                    <strong>
Method:
                                    </strong>
                                    {order.paymentMethod}
                                </p>
                                {
                                    order.isPaid ? (
                                        <Message variant='success'>Padi on: {order.paidAt}</Message>
                                    ):(
                                        <Message variant="danger">Not Paid</Message>
                                    )
                                }
                            </ListGroup.Item>
                            <br></br>
                            <ListGroup.Item>
                                <h2>Order Items:</h2>
                                {order.orderItems.length ===0 ? (
                                    <Message variant='danger'>Order is Empty</Message>
                                ): (
                                    <ListGroup vriant ='flush'>
                                        {order.orderItems.map((item, index)=> (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image 
                                                        src={item.image}
                                                        alt={item.name}
                                                        fluid
                                                        rounded
                                                        />
                                                    </Col>
                                                    <Col>
                                                    <Link to ={`/product/${item.product}`}>
                                                    {item.name}
                                                    </Link>
                                                    </Col>
                                                    <Col md = {4}>
                                                        {item.qty} x {item.price} = {item.qty * item.price}
                                                    </Col>
                                                    
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>

                                )}
                            </ListGroup.Item>
                    
                </ListGroup>
            </Col>
            <Col md ={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Order Summery</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Items</Col>
                                <Col> ${itemsPrice(order)}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Sipping Price:</Col>
                                <Col> ${order.shippingPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Tax:</Col>
                                <Col> ${order.taxPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Total Price:</Col>
                                <Col> ${order.totalPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>

        </Row>
        </>
    )
}

export default OrderScreen
