import React, { useState } from 'react';
import './formcheckout.css';

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    const [confirmEmail, setConfirmEmail] = useState('');
    const [errors, setErrors] = useState({});

    const handleChangeConfirmEmail = (e) => {
        setConfirmEmail(e.target.value);
        if (e.target.value !== dataForm.email) {
            setErrors(prev => ({ ...prev, confirmEmail: 'Los correos electrónicos no coinciden.' }));
        } else {
            setErrors(prev => ({ ...prev, confirmEmail: '' }));
        }
    };

    const validateForm = () => {
        let formErrors = {};
        if (!dataForm.fullname) formErrors.fullname = 'El nombre completo es obligatorio.';
        if (!dataForm.phone) formErrors.phone = 'El teléfono es obligatorio.';
        if (!dataForm.email) formErrors.email = 'El correo electrónico es obligatorio.';
        if (dataForm.email !== confirmEmail) formErrors.confirmEmail = 'Los correos electrónicos no coinciden.';
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmitForm(e);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre completo</label>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />
            {errors.fullname && <p className="error">{errors.fullname}</p>}

            <label>Teléfono</label>
            <input type="number" name='phone' value={dataForm.phone} onChange={handleChangeInput} />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <label>Email</label>
            <input type="email" name='email' value={dataForm.email} onChange={handleChangeInput} />
            {errors.email && <p className="error">{errors.email}</p>}

            <label>Confirmar Email</label>
            <input type="email" value={confirmEmail} onChange={handleChangeConfirmEmail} />
            {errors.confirmEmail && <p className="error">{errors.confirmEmail}</p>}

            <button type='submit'>Enviar mi orden</button>
        </form>
    );
};

export default FormCheckout;

