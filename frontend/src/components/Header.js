import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="drak"expand="lg">
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand>E-Commerce</Navbar.Brand>
                    </LinkContainer>
                    
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <LinkContainer to='/cart'>
                        <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                        </LinkContainer>
                            <LinkContainer to='/signin'>
                            <Nav.Link><i className= 'fas fa-user'></i>Sing In</Nav.Link>
                            </LinkContainer>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
