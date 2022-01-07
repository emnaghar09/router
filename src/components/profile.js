import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { sweet } from './array';
import {Link} from 'react-router-dom'
import './profile.css';


function profile() {
    return (
     <div className="profile">
 {sweet.map((el, key) =>( <div>
<Card style={{ border:"success" , width: '18rem', height: '25rem'}}>
  <Card.Img className="cardimg" variant="top" src={el.affiche}/>
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text> for recipe click on this <Link to={`/Details/${el.id}`}><Button>Recipe</Button></Link></Card.Text>
  </Card.Body></Card>
  </div>))}


     </div>

 
    )
}

export default profile


    {/* <h1 className='title'> Choose your favourite dessert</h1>
        <div className="profile">
        {sweet.map((el, key) =>
            (<div className="profilesindiv">
            <h1> {el.title}</h1>
            <img className="profilepic" src={el.affiche} />
            <p> for recipe click on this <Link to={`/sweet/${el.recipe}`}><li className="recipe">Recipe</li></Link> </p>
            </div>)
    )}
        </div> */}