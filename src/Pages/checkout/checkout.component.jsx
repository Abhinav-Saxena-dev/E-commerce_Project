import React from 'react';

import CheckoutItem from '../../Components/checkout-item/checkout-item.component';

import { selectCartTotal } from '../../redux/cart/cart.selector';
import { selectCartItems } from '../../redux/cart/cart.selector';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import './checkout.style.scss';

const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem = {cartItem} />
                )
        }

        <div className="total">
            <span>Total : ${cartTotal}</span>
        </div>
    </div>
    )

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartTotal : selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);