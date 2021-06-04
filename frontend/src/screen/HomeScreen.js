import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import {listProducts} from '../actions/productActions'
import {useDispatch, useSelector} from 'react-redux'





const HomeScreen = () => {
const dispatch = useDispatch();
const productList = useSelector((state) => state.productList);

const {loading, error, products} = productList;
useEffect(()=>{
    dispatch(listProducts());
    
}, [dispatch]);

    return (
        <>
        <h1> Latest Products</h1>
        
        <Row>
            {loading ? (
            <h2>Loading...</h2>
            ) : error ? (
            <h2>Error...{error} </h2>
            ) : (
                products.map((product) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                
                </Col>
                ))
                )}
        </Row>

        </>
    )
}
export default HomeScreen




/**
 * before redux while data is directly come from database
 * 
 * const HomeScreen = () => {

    // const [products, setProducts] = useState([]);

    // useEffect (() =>{
    // const fetchProduct = async () => {
    //     const res = await axios.get("http://localhost:5000/api/products");
    //     const data = res.data;

    //     setProducts(data);
    // }
    // fetchProduct();
    // },[])
    return (
        <>
        <h1> Latest Products</h1>
        
        <Row>
            {products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                
                </Col>
            ))}
        </Row>

        </>
    )
}
 */



