// src/components/Cart.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './Cart.css'; // Import the CSS file for styling

const Cart = ({ cartItems, removeFromCart }) => {
    const [showQRCode, setShowQRCode] = useState(false);

    const handlePayment = () => {
        setShowQRCode(true);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + parseInt(item.price), 0);
    };

    const generateQRCodeData = () => {
        const totalPrice = calculateTotalPrice();
        return `upi://pay?pa=payssk@ibl&am=${totalPrice}`;
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Price (₹)</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.author}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button onClick={() => removeFromCart(index)}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="total-price">
                            <h3>Total Price: ₹{calculateTotalPrice()}</h3>
                        </div>
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
