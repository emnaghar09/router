import React from 'react'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <div className="navbar">
        <Link to="/"><Button variant="danger">Home</Button></Link>
        <Link to="/Profile"><Button variant="danger">Desserts</Button></Link>
        <Link to="/About"><Button variant="danger">About</Button></Link>

        </div>
    )
}

export default Navbar
