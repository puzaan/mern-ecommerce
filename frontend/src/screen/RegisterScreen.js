import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import FormContainer from "../components/FormContainer";
import Message from '../components/Message'
import Loader from '../components/Loder.js'
import { Form, Button } from 'react-bootstrap'
import { register } from '../actions/userAction';

const RegisterScreen = ({ history }) => {

  // email, name, passwor, confirmPassword
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassoword] = useState('');
  const [message, setMessage] = useState(null);


  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const dispatch = useDispatch();

  // useEffect(()=> {
  //     if(userInfo){
  //         history.push('/')
  //     }
  // })



  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Password donot match!");
    }

    dispatch(register(name, email, password));
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>

      {message && <Message variant="danger">{message}</Message>}

      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password Agin"
            value={confirmPassword}
            onChange={(e) => setConfirmPassoword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>
    </FormContainer>
  );
}

export default RegisterScreen
