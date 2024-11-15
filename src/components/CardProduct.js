import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import CardProductDetail from './CardProductDetail';

function CardProduct(props){
    const product = props.product;

    const handleClick = () =>{
        console.log("click "+ product.name);
        // props.onClick(product.id);
    }

    return (
        <article>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={handleClick}><Link to="/CardProductDetail">voir</Link></button>
        </article>
    )
}

export default CardProduct;