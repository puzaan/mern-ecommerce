import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'





const HomeScreen = () => {

    const [products, setProducts] = useState([]);

    useEffect (() =>{
    const fetchProduct = async () => {
        const res = await axios.get("http://localhost:5000/api/products");
        const data = res.data;

        setProducts(data);
    }
    fetchProduct();
    },[])

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

export default HomeScreen
