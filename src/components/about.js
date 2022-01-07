import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'; 
import {useState} from 'react';

function Add({handlerDesserts}) {
    // imported for the form group
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // added to make the add btn functionnal

    const [title, setTitle]=useState('')
    const [time, setTime]=useState('')
    const [recette, setRecette] = useState('')
  
   
    
    // const addNewMovie = () => {
    //     handlerMovie({title,time,recette})
    //     handleClose()
    // }

    return (
    <div className="add">
        <Button variant="warning" onClick={handleShow} className="btnadd">
       ADD NEW DESSERT
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title> ADD NEW DESSERT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Dessert Name</Form.Label>
    <Form.Control type="email" placeholder="add the dessert name" onInput ={(event)=> setTitle(event.target.value)}  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Time</Form.Label>
    <Form.Control type="email" placeholder="add the preparation time"  onInput ={(event)=> setTime(event.target.value)}  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
    <Form.Label>recette</Form.Label>
    <Form.Control type="email" placeholder="add the dessert recipe"  onInput ={(event)=> setRecette(event.target.value)}  />
    </Form.Group>
    
        </Form>
        

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Cancel
            </Button>
            {/* <Button variant="warning" onClick={addNewMovie}>
            Save Changes
            </Button> */}
        </Modal.Footer>
        </Modal>
    </div>
    );
}


export default Add;
