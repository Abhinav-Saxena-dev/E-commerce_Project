import React from 'react';

import './checkout-item.style.scss';

const CheckoutItem = ({cartItem : {name,price,quantity,imageUrl}}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <span className="remove-button">&#10005;</span>
    </div>
)

export default CheckoutItem;