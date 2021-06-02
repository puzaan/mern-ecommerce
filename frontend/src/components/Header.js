import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="drak"expand="lg">
                <Container>
                    <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                            <Nav.Link href="/signin"><i className= 'fas fa-user'></i>Sing In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
