import React, { useEffect } from "react";
import { Button, Card, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Message from "../components/Message";

const CartScreen = ({ match, history,location }) => {
    const productId = match.params.id;

    console.log(productId);

    const qty = location.search ? Number(location.search.split("=")[1]) : 1

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const { cartItems } = cart;
    useEffect(() => {

        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);


    const removeFromCartHandler = (productId) => {
dispatch(removeFromCart(productId));
    }
    const checkoutHandler = () => {
        history.push("/login?redirect=shipping");
      };
    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        Your cartss is empty <Link to="/">Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant="flush">
                        {cartItems.map((items) => (
                            <ListGroup.Item key={items.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image
                                            src={items.image}
                                            lat={items.name}
                                            fluid
                                            rounded
                                        ></Image>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${items.product}`}>{items.name}</Link>
                                    </Col>
                                    <Col md={2}>$ {items.price}</Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as="select"
                                            value={DataTransferItemList.qty}
                                            onChange={(e) =>
                                                dispatch(
                                                    addToCart(items.product, Number(e.target.value))
                                                )
                                            }
                                        >
                                            {[...Array(items.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md ={2}>
                                        <Button type='button'
                                        variant='light'
                                        onClick={()=> removeFromCartHandler(items.product)}

                                        >
                                            <i className='fas fa-trash'></i>
                                            
                                        </Button>
                                    </Col>
                                    
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                                        <Card>
                                            <ListGroup variant='flush'>
                                                <ListGroup.Item>
                                                    <h2>
                                                        subTotal ({cartItems.reduce((acc, item)=> acc+ item.qty, 0)})
                                                        items 
                                                        </h2>
                                                       $
                                                            {
                                                                cartItems.reduce((acc, item) => acc +item.qty * item.price, 0)
                                                                .toFixed(2)
                                                            }
                                                        
                                                    

                                                </ListGroup.Item>
                                                <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </Button>
            </ListGroup.Item>

                                            </ListGroup>
                                        </Card>
                                    </Col>
                                
        </Row>
    );
};

export default CartScreen;
