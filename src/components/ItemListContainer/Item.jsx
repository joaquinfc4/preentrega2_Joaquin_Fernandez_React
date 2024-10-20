import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
            <Link className='card-link' to={ "/detail/"+product.id }>
                <img src={product.image} className="img card" alt={product.name} />
                <div className='card-text'>
                    <h5>{product.name}</h5>
                    {/* <p className="card-text">{product.description}</p> */}

                    <div>
                        <a
                            href="#"
                            className="btn btn-primary btn-custom"
                        /* onClick={() => agregarAlCarrito(trago)} */
                        >
                            Comprar
                        </a>
                        <h4 className="d-inline-block">${product.price}</h4>
                    </div>
                </div>
            </Link>
       
        
    );
};

export default Item;
