import React from 'react';
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

const NewNavBar = (props) => {
    return(
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Local_NYC</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#login">Log In</Nav.Link>
                <Nav.Link href="#register">Register</Nav.Link>
                
            </Nav>

        </Navbar>
    )
    

}



  export default NewNavBar