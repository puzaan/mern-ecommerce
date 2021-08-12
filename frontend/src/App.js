import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import {Container} from 'react-bootstrap';
import HomeScreen from './screen/HomeScreen'
import{BrowserRouter as Router, Route} from 'react-router-dom'
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import ProfileScreen from './screen/ProfileScreen';
import ShippingAddress from './screen/ShippingAddress';
import PaymentScreen from './screen/PaymentScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';
import OrderScreen from './screen/OrderScreen';

const App = () => {
  return (
    <Router>
    <Header />

      <main className='py-3'>
        <Container>
    
        <Route path='/' component={HomeScreen} exact></Route>
        <Route path='/product/:id' component={ProductScreen}></Route>
        <Route path='/cart/:id?' component={CartScreen}></Route>
        <Route path='/orders/:id?' component={OrderScreen}></Route>
        <Route path='/login' component={LoginScreen}></Route>
        <Route path='/profile' component={ProfileScreen}></Route>
        <Route path='/register' component={RegisterScreen}></Route>
        <Route path='/shipping' component={ShippingAddress}></Route>
        <Route path='/payment' component={PaymentScreen}></Route>
        <Route path='/placeorder' component={PlaceOrderScreen}></Route>





        </Container>
      </main>
      <Footer />

    </Router>
  )
}

export default App
