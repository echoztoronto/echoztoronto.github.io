import React from "react"
import { Navbar, Nav } from 'react-bootstrap'
import './../style.css'



export default function Navbars() {
    return (
        <Navbar className="navbar bg-dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="/"> Yuwen (Echo) Zheng </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/project">Projects</Nav.Link>
                    <Nav.Link href="https://github.com/echoztoronto">GitHub</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}