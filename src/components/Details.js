import React from 'react'
import {Card, Button} from 'react-bootstrap';

  function Details({Liste,match,history}) {
    console.log(history)
 
    const found=Liste.find((elem) => (elem.id == match.params.id))
    console.log(found)
   
    return (
        <div className="details">


<Card className="details">
<Card.Img variant="top" className="detailsimg" src={found.affiche} />
<Card.Body>
<h1>{found.title}</h1>
<h2>{found.time}</h2>
  <Card.Text>
  {found.recipe}
  </Card.Text>
</Card.Body>
<div className="btns">
       <Button variant="danger" onClick={()=>history.goBack()}>Go back</Button>
            <Button variant="danger" onClick={()=>history.push('/')}>Home</Button>
            </div>
</Card>
            
        
         
           
        
     

   
            
        </div>
    )
}

export default Details;
