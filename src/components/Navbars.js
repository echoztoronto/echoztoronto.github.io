import React from "react"
import { Navbar, Nav } from 'react-bootstrap'

const navStyle = {
    padding: "10px 5% 10px 15%",
    fontFamily: "'Audiowide', sans-serif",
    //"fontFamily": "'Festive', cursive"
};

export default function Navbars() {
    return (
        <Navbar style={navStyle} variant="dark" expand="lg" fixed="top" className="bg-dark">
            <Navbar.Brand href="/"> Yuwen Zheng </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="container-fluid">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/project">Projects</Nav.Link>
                    <Nav.Link href="https://github.com/echoztoronto" className="ml-auto"> GitHub</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}