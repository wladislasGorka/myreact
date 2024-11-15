import React from 'react';

function CardProductDetail(props){
    const product = props.product;

    return (
        <article>
            <h1>Hello</h1>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </article>
    )
}

export default CardProductDetail;