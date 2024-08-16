import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ForgotPassword from 'pages/users/forgotPasswordPage/ForgotPassword';

function Login({ toggle, setUser }) {
    const navigate = useNavigate();
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // State for "Remember Me"
    const [message, setMessage] = useState('');
    const API_URL = "http://localhost:8080/api/accounts";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const params = new URLSearchParams();
            params.append('email', email);
            params.append('password', password);

            const response = await axios.post(`${API_URL}/login`, params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            const authenticatedUser = response.data;

            // Save token from response to localStorage
            localStorage.setItem('token', response.data.token);

            if (rememberMe) {
                // Save email and password to localStorage if Remember Me is checked
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
            } else {
                // Remove email and password from localStorage if Remember Me is not checked
                localStorage.removeItem('email');
                localStorage.removeItem('password');
            }

            // Set user in parent component state
            setUser(authenticatedUser);

            // Redirect based on user role
            if (authenticatedUser.role === 'AD') {
                navigate('/admin');
            } else if (authenticatedUser.role === 'ST') {
                navigate('/staff/SalesPage');
            } else if (authenticatedUser.role === 'MA') {
                navigate('/manager/ManagerPage');
            } else {
                navigate('/');
            }

            // Close login popup
            toggle();
        } catch (error) {
            // Handle login error
            console.error('Error occurred!!!', error.response || error.message);
            setMessage('Login failed!!!');

            if (error.response) {
                console.log('Status:', error.response.status);
                console.log('Data:', error.response.data);
                console.log('Headers:', error.response.headers);
            }
        }
    };

    const handleForgotPassword = () => {
        setShowForgotPassword(true);
    };

    useEffect(() => {
        // Check if there are login details in localStorage
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');

        if (savedEmail && savedPassword) {
            // If there are, set email and password to state and set Remember Me to true
            setEmail(savedEmail);
            setPassword(savedPassword);
            setRememberMe(true);
        }
    }, []);

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>{showForgotPassword ? '' : 'Đăng nhập'}</h2>
                <span className="popup-close" onClick={toggle}><IoCloseOutline /></span>
                {!showForgotPassword && (
                    <form onSubmit={handleSubmit}>
                        <label>
                            <MdOutlineMailOutline /> Email
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>
                            <FaLock /> Password
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>

                        <div className="remember-me">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Remember Me
                        </div>

                        <button type="submit"><RiLoginBoxLine /> LOGIN</button>
                    </form>
                )}
                {showForgotPassword && (
                    <ForgotPassword setShowForgotPassword={setShowForgotPassword} />
                )}
                {!showForgotPassword && (
                    <button className="forgot-password" onClick={handleForgotPassword} role="link" aria-label="Forgot Password?">
                        Forgot Password?
                    </button>
                )}

                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default Login;