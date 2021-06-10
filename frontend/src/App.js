import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import {Container} from 'react-bootstrap';
import HomeScreen from './screen/HomeScreen'
import{BrowserRouter as Router, Route} from 'react-router-dom'
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';

const App = () => {
  return (
    <Router>
    <Header />

      <main className='py-3'>
        <Container>
    
        <Route path='/' component={HomeScreen} exact></Route>
        <Route path='/product/:id' component={ProductScreen}></Route>
        <Route path='/cart/:id?' component={CartScreen}></Route>



        </Container>
      </main>
      <Footer />

    </Router>
  )
}

export default App
