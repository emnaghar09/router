import React from 'react'
import {ListGroup, Button}  from 'react-bootstrap';
import {Link} from 'react-router-dom'
function contact() {
    return (
        <div className='contact'>
            <ListGroup>
  <ListGroup.Item>ADRESS:  GoMyCode Hackerspace, 1 Place Tahar Haddad, 1 Tunis 1053, Tunis 1053</ListGroup.Item>
  <ListGroup.Item>PHONE:   39 143 900</ListGroup.Item>
  <ListGroup.Item>EMAIL:   hello@gomycode.co</ListGroup.Item>
  <Link to="/"><Button variant="danger">Home</Button></Link>
</ListGroup>
        </div>
    )
}

export default contact
