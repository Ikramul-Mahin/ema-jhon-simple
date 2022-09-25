import React from 'react';

import './Product.css'

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, price, img, ratings, seller } = product


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <p>Price:${price}</p>

                <h4>Manufacturer: {seller}</h4>
                <p><small>Ratings:{ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p> Add To Cart</p></button>

        </div>
    );
};

export default Product;