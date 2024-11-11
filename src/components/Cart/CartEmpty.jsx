import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

const CartEmpty = () => {
    return (
        <div className="empty-cart-container">
            <div className="empty-cart-content">
                <h2>El carrito está vacío</h2>
                <p>¡Parece que no has agregado ningún artículo aún!</p>
                <Link to="/" className="back-to-home-btn">Volver al inicio</Link>
            </div>
        </div>
    );
};

export default CartEmpty;
