import React from 'react';
import {Container, Spinner} from 'react-bootstrap';


const Loader =() =>{
    return(
        <Container>
            <Spinner animation='border'
        role='status'
        style={{
            width: '100px',
            height: "100px",
            margin:'auto',
            display:'block',
        }}
        >
            


        </Spinner>
        <h3>Loading....</h3>

        </Container>
        
        
    )
}

export default Loader