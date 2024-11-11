import React from 'react';
import { useState } from 'react';
import FormCheckout from './FormCheckout';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContex';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import db from '../../db/db';
import { Link } from 'react-router-dom';
import validateForm from '../../utils/validateForm';
import { toast } from 'react-toastify';
import './Checkout.css';

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    });
    const [idOrder, setIdOrder] = useState(null);
    const { cart, totalPrice, deleteCart } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()
        };

        try {
            const response = await validateForm(dataForm);
            if (response.status === "error") throw new Error(response.message);

            toast.success("Subiendo orden...");
            uploadOrder(order);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, "orders");
        addDoc(ordersRef, newOrder)
            .then((response) => setIdOrder(response.id))
            .catch((error) => console.log(error))
            .finally(() => {
                deleteCart();
            });
    };

    return (
        <div className="checkout-container">
            {
                idOrder === null ? (
                    <FormCheckout
                        dataForm={dataForm}
                        handleChangeInput={handleChangeInput}
                        handleSubmitForm={handleSubmitForm} />
                ) : (
                    <div>
                        <h2>Su orden se subió correctamente</h2>
                        <p>Por favor guarde su número de seguimiento: {idOrder}</p>
                        <Link to="/">Volver al inicio</Link>
                    </div>
                )
            }
        </div>
    );
};

export default Checkout;


