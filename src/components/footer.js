import React from 'react'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="footer">
        <p> This site is here to help you improve your baking skills </p>
        <Link to="/Contact"><Button variant="danger">Contact</Button></Link>
        <p> copy rights </p>

        </div>
    )
}

export default Navbar
