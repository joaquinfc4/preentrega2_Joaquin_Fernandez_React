import React, { useState } from 'react';
import './itemcount.css';

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1);

    const handleClickRest = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleClickAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    return (
        <div className="counter-container">
            <button onClick={handleClickRest} className="counter-btn">-</button>
            <p className="counter-display">{count}</p>
            <button onClick={handleClickAdd} className="counter-btn">+</button>
            <button onClick={() => addProduct(count)} className="add-to-cart-btn">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
