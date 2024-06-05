// src/pages/CartPage.js
import React from 'react';
import Cart from '../Components/Cart.js';

const CartPage = ({ cartItems, removeFromCart }) => {
    return (
        <div className="container">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
    );
};

export default CartPage;
