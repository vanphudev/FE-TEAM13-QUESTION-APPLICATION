import React, { useState } from 'react';
import axios from 'axios';
import { IoCloseOutline } from "react-icons/io5";
import './Register.scss';

function Register({ toggle }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const API_URL = "http://localhost:8080/api/accounts/register";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match!');
            setShowModal(true);
            return;
        }
        
        try {
            const params = new URLSearchParams();
            params.append('name', name);
            params.append('email', email);
            params.append('password', password);
            params.append('phone', phone);
            params.append('address', address);

            const response = await axios.post(API_URL, params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            if (response.status === 200) {
                setSuccessMessage('Account created successfully!');
                setMessage('');
                setShowModal(true);
                // Reset form fields
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setPhone('');
                setAddress('');
            }
        } catch (error) {
            console.error('Error occurred!!!', error.response || error.message);
            setMessage('Registration failed!!!');
            setShowModal(true);

            if (error.response) {
                console.log('Status:', error.response.status);
                console.log('Data:', error.response.data);
                console.log('Headers:', error.response.headers);
            }
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setMessage('');
        setSuccessMessage('');
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Register</h2>
                <span className="popup-close" onClick={toggle}><IoCloseOutline /></span>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Email
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Password
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <label>
                        Confirm Password
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </label>
                    <label>
                        Phone
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </label>
                    <label>
                        Address
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </label>
                    <button type="submit">Register</button>
                </form>
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="modal-close" onClick={closeModal}><IoCloseOutline /></span>
                            {message && <p style={{ color: 'red' }}>{message}</p>}
                            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Register;