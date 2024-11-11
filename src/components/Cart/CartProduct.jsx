import React from 'react';

const CartProduct = ({ productCart, deleteProductById }) => {
    return (
        <div className="cart-product">
            <img src={productCart.image} width={100} alt="" />
            <p>{productCart.name}</p>
            <p>Cantidad: {productCart.quantity}</p>
            <p>Precio c/u: {productCart.price}</p>
            <p>Precio parcial: {productCart.quantity * productCart.price}</p>
            <button onClick={() => deleteProductById(productCart.id)}>Borrar producto</button>
        </div>
    );
};

export default CartProduct;
