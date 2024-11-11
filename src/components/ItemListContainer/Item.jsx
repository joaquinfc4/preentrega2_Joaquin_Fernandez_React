import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
            <div className='card-link'>
                <img src={product.image} className="img card" alt={product.name} />
                <div className='card-text'>
                    <h5>{product.name}</h5>
                    {/* <p className="card-text">{product.description}</p> */}

                    <div>
                        <Link
                             to={ "/detail/"+product.id }
                            className="btn btn-primary btn-custom"
                        /* onClick={() => agregarAlCarrito(trago)} */
                        >
                            Detalles
                        </Link>
                        <h4 className="d-inline-block">${product.price}</h4>
                    </div>
                </div>
            </div>
       
        
    );
};

export default Item;
