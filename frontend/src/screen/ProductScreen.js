import React, { useEffect} from "react";
import { Image, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import {useDispatch, useSelector} from 'react-redux'
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loder";
import Message from "../components/Message";

const ProductScreen = ({ match }) => {
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.productDetails);
    const {loading, error, product} = productDetail;

useEffect ( ()=> {
dispatch(listProductDetails(match.params.id));


}, [dispatch, match.params.id]
)




    return (
        <>
            <Link className="btn btn-light my-3" to="/">
        Go Back{" "}
            </Link>
                {loading ? (
                    <Loader />

                ): error ?(
                    <Message variant="danger">{error}</Message>
                ): 
                
                
                (<Row>
                    <Col md={6}>
                        <Card className="my-3 p-3 rounded">
                            <Image src={product.image} alt={product.name}></Image>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                                
                            </ListGroup.Item>
                            <ListGroup.Item variant="flush">
                                    <Rating
                                        value={product.rating}
                                        text={`${product.numReviews} reviews`}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price: ${product.price}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {product.description}
                                </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Price:
                                    </Col>
                                    <Col>
                                    <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Status:
                                    </Col>
                                    <Col>
                                    <strong>{product.countInStock > 0 ? 'In Stock':'Out of Stock'}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button 
                                className ='btn-block' 
                                type='button' 
                                disabled ={product.countInStock ===0} >
                                    Add To Cart
                                    </Button>
                            </ListGroup.Item>
                        </ListGroup>
                        </Card>
                    </Col>
    
                </Row>
            )}



            
        </>
    );
};

export default ProductScreen;




/**
 * before using redux
 * const ProductScreen = ({ match }) => {

    //while showing data from hard coded data 
//    { const product = products.find((p) => p._id === match.params.id);
// match.params.id match both api id and url id}

const [product, setProduct] = useState ({});

useEffect ( ()=> {

    const fetchProduct = async () =>{
        const res = await axios.get(`http://localhost:5000/api/products/${match.params.id}`)
        const data = res.data;
        setProduct(data);
    }
    
    fetchProduct();


}, [match.params.id])




    return (
        <>
            <Link className="btn btn-light my-3" to="/">
        Go Back{" "}
            </Link>
            <Row>
                <Col md={6}>
                    <Card className="my-3 p-3 rounded">
                        <Image src={product.image} alt={product.name}></Image>
                    </Card>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                            
                        </ListGroup.Item>
                        <ListGroup.Item variant="flush">
                                <Rating
                                    value={product.rating}
                                    text={`${product.numReviews} reviews`}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {product.description}
                            </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Price:
                                </Col>
                                <Col>
                                <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Status:
                                </Col>
                                <Col>
                                <strong>{product.countInStock > 0 ? 'In Stock':'Out of Stock'}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Button className ='btn-block' type='button' disabled ={product.countInStock ===0} >Add To Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                    </Card>
                </Col>

            </Row>
        </>
    );
};

export default ProductScreen;

 * 
 * 
 */