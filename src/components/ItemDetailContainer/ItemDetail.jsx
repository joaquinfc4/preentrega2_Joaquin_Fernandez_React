import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContex';
import { Link } from 'react-router-dom';
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
    const [showItemCount, setShowItemCount] = useState(true);
    const { addProductInCart } = useContext(CartContext);

    const addProduct = (count) => {
        const productCart = { ...product, quantity: count };
        addProductInCart(productCart);
        setShowItemCount(false);
    };

    return (
        <div className='itemDetail'>
            <img className='itemDetailImg' src={product.image} alt="" />
            <div className='itemDetailContent'>
                <h2 className='itemDetailName'>{product.name}</h2>
                <p className='itemDetailDescription'>{product.description}</p>
                <p className='itemDetailPrice'>Precio: ${product.price}</p>
                {product.stock === 1 && <p className="low-stock-message">¡Solo queda 1 en stock!</p>}
                {showItemCount ? (
                    <ItemCount stock={product.stock} addProduct={addProduct} />
                ) : (
                    <Link to="/cart" className="itemDetailLink">Ir al carrito</Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
