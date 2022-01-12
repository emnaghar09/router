
import React, { useState } from 'react';
import { sweet } from './array';
import {Button} from 'react-bootstrap';


export default function Product() {
const [qnt, setqnt] =useState(0)

const addqnt= (e) => {
    sum(Number(e.target.parentNode.getElementsByClassName('price')['0'].innerHTML))
   return setqnt(qnt+1)
}
const minusqnt= () => { if (qnt>0){setqnt(qnt-1)}}
    
const sum = (data) => {
    let iniSum = 0;
    iniSum += data;
    console.log(iniSum) 
}
return(
    <div className="wrapper">
    <div>
        Shopping Cart: {qnt} total items.
    </div>
    <div>Total: {sum()} $</div>
        <div className="product">
        {sweet.map(product => (
        <div key={product.title} className="product-title">
            <div >
            <span role="img" aria-label={product.title}><img  src={product.affiche} width="200" height="220"/></span>
            </div>
            <div className="product-btn" >
            <Button variant="success" onClick={addqnt}>Add</Button> {' '}
            <span className="price">{product.price}</span>
            <Button variant="secondary"  onClick={minusqnt}>Remove</Button>
        </div>
        </div>
        ))}
    </div>
    </div>
)
}
