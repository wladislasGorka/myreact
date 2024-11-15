import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import CardProductDetail from './CardProductDetail';
import { useNavigate } from 'react-router-dom';

function CardProduct(props){
    const product = props.product;
    const navigate = useNavigate();

    const handleClick = () =>{
        console.log("click "+ product.name);
        // props.onClick(product.id);
        navigate("/CardProductDetail");
    }

    return (
        <article>
            <h3>{product.name}</h3>
            {/* <p>{product.description}</p> */}
            <p>{product.price}</p>
            <button onClick={handleClick}><Link to="/CardProductDetail">voir</Link></button>
            
            <Routes>
                <Route path="/CardProductDetail" element={<CardProduct produit={props}/>}/>
            </Routes>
            
        </article>
    )
}

export default CardProduct;