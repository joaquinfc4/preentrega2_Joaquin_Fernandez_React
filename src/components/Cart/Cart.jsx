import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContex';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CartEmpty from './CartEmpty';
import CartProduct from './CartProduct';
import 'react-toastify/dist/ReactToastify.css';
import './cartempty.css';

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext);
    
    const handleDeleteProduct = (id) => {
        deleteProductById(id);
        toast.success('Producto eliminado del carrito');
    };

    if (cart.length === 0) {
        return (
            <CartEmpty />
        );
    }

    return (
        <div className="cart">
            <h2>Productos en el carrito</h2>
            {cart.map((productCart) => (
                <CartProduct key={productCart.id} productCart={productCart} deleteProductById={handleDeleteProduct} />
            ))}
            <p>Precio total: {totalPrice()}</p>
            <button onClick={deleteCart}>Borrar carrito</button>
            <Link to="/checkout">Terminar mi compra</Link>
        </div>
    );
};

export default Cart;
