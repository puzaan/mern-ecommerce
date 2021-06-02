import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const date = new Date().getFullYear();


const Footer = () => {
    return (
        
            <footer>
                <Container>
                <Row>
                    <Col className='text-center py-3'>
                    Copyright &copy; E-commerce {date} 
                    </Col>
                </Row>
                </Container>
            
            
        </footer>

        
    )
}

export default Footer
