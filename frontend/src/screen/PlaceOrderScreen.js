import React from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import Message from "../components/Message";

const PlaceOrderScreen = () => {
    const cart = useSelector((state) => state.cart);

    // Calculate Price
    cart.itemsPrice = cart.cartItems
        .reduce((acc, item) => acc + item.price * item.qty, 0)
        .toFixed(2);

    cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10).toFixed(2);

    cart.taxPrice = Number(0.15 * cart.itemsPrice).toFixed(2);

    cart.totalPrice = (
        Number(cart.itemsPrice) +
        Number(cart.shippingPrice) +
        Number(cart.taxPrice)
    ).toFixed(2);

    const placeOrderHandler = () => { 
        console.log('order placed')
    };

    return (
        <>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>

            <Row>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address: </strong>
                                {cart.shippingAddress.address}, {cart.shippingAddress.city},
                                {cart.shippingAddress.postalCode},{" "}
                                {cart.shippingAddress.country},
                            </p>
                        </ListGroup.Item>

                        <br></br>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>

                            <p>
                                <strong>Payment Method: </strong>
                                {cart.paymentMethod}
                            </p>
                        </ListGroup.Item>

                        <br></br>

                        <ListGroup.Item>
                            <h2>Order Items</h2>

                            {cart.cartItems.length === 0 ? (
                                <Message>Your cart is Empty</Message>
                            ) : (
                                <ListGroup variant="flush">
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={3}>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fuild
                                                        rounded
                                                        height="100"
                                                    ></Image>
                                                </Col>

                                                <Col>
                                                    <Link to={`/product/${item.product}`}>
                                                        {item.name}
                                                    </Link>
                                                </Col>

                                                <Col md={4}>
                                                    {item.qty} x ${item.price} = ${item.qty * item.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            <Col md={4}>
                <Card>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <h2>Oder Summary</h2>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Items</Col>
                                                    <Col>{cart.itemsPrice}</Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Shipping</Col>
                                                    <Col>{cart.shippingPrice}</Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Tax</Col>
                                                    <Col>{cart.taxPrice}</Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Total</Col>
                                                    <Col>{cart.totalPrice}</Col>
                                                </Row>
                                            </ListGroup.Item>

                                            <ListGroup.Item>
                                                <Button type='button' className='btn-block' disable={cart.cartItems ===0} onClick={placeOrderHandler}> place Order</Button>

                                                </ListGroup.Item>
                                        </ListGroup>

                </Card>
            </Col>
            </Row>
        </>
    );
};

export default PlaceOrderScreen;
