import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import {Container} from 'react-bootstrap';
import HomeScreen from './screen/HomeScreen'

const App = () => {
  return (
    <>
    <Header />

      <main className='py-3'>
        <Container>
    
          <HomeScreen />


        </Container>
        
        

      </main>
      <Footer />

    </>
  )
}

export default App
