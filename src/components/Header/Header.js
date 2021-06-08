import React from 'react'
import {  Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
               <Link to="/"><Navbar.Brand href="#home">FALCI</Navbar.Brand></Link>
            </Navbar>

        </>
    )
}

export default Header
