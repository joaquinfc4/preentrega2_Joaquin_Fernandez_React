import React from 'react'
import "./itemdetail.css"

const ItemDetail = ({ product }) => {
    return (
        <div className='itemDetail'>
            <img className='itemDetailImg' src={product.image} alt="" />
            <div>
                <h2 className='itemDetailName'>{product.name}</h2>
                <p className='itemDetailDescription'>{product.description}</p>
                <p className='itemDetailPrice'>Precio: ${product.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail