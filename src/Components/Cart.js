// src/components/Cart.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const Cart = ({ cartItems, removeFromCart }) => {
    const [showQRCode, setShowQRCode] = useState(false);

    const handlePayment = () => {
        setShowQRCode(true);
    };

    const generateQRCodeData = () => {
        const items = cartItems.map(item => `${item.title} - ${item.author}`).join(', ');
        return `PAYMENT REQUEST: ${items}`;
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.title} - {item.author}
                                <button onClick={() => removeFromCart(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handlePayment}>Proceed to Payment</button>
                    {showQRCode && (
                        <div className="qr-code">
                            <h3>Scan this QR code to pay:</h3>
                            <QRCode value={generateQRCodeData()} size={256} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Cart;
