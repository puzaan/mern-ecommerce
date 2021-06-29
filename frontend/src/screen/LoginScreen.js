import React ,{useEffect, useState}from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import {login} from '../actions/userAction'
import Message from '../components/Message'
import Loader from '../components/Loder.js'
const LoginScreen = ({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector((state)=> state.userLogin);
    const {loading, err, userInfo} = userLogin;
useEffect(()=> {
    if(userInfo){
history.push('/')
    }
})
    



    const submitHandler = (e)=> {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
                    <h1>Sign In</h1>
                    {err && <Message variant='danger'>{err}</Message>} 
                        {loading && <Loader />}



                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Button type="submit"
                        variant="primary"
                        
                        >
                            Sign In
                        </Button>
                        <Row className="py-3">
                            <Col>
                                New Customer? <Link to={`/register`}>Register</Link>
                            </Col>
                        </Row>
                    </Form>
                    </FormContainer>
                
    );
};

export default LoginScreen;
