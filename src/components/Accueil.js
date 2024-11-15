import React, { useState } from 'react';
import Header from './Header';
import CardProduct from './CardProduct';
import products from '../products';

function Accueil(){

    const [productDetail,setProductDetail] = useState();

    const handleClick = (id) => {
        setProductDetail(id);
    }

    return (
        <>
            <Header name="Acceuil"/>
            <main>
                <h3>Produits : </h3>
                <div className='listProducts'>
                    {products.map(product => {
                        return <CardProduct key={product.id} product={product} onClick={handleClick}/>
                    })}
                </div>
                {productDetail && (
                    <article className='productDetail'>
                        <h2>{products[productDetail-1].name}</h2>
                        <p>{products[productDetail-1].description}</p>
                    </article>
                )}
            </main>
        </>
    );
}

export default Accueil;