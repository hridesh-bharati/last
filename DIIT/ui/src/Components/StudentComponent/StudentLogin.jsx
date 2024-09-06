import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../../App.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { login } from '../../api/studentApi/api';

function StudentLogin() {
    const [regNum, setRegNum] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const loginHandler = async () => {
        const response = await login(regNum, password);
        if (response.token) {
            localStorage.setItem('sToken', response.token);
            navigate('/StudentHomePage');
        }
    }
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className='wrapper pt-5'>
                <div className="myshadow mx-2 border border-light">
                    <div className="text-center shadow shadow-sm mt-2 text-success p-3 rounded-pill h4 fw-bolder">Student Login Portal</div>
                    <div className="Stdlogo my-3"><img src="/images/icon/user.png" alt="Student" /></div>
                    <div className="px-0 py-5">
                        <div className="form-field d-flex align-items-center"><i className="bi bi-person-circle"></i>
                            <input type="text" placeholder="Registration number" onChange={(e) => setRegNum(e.target.value)} />
                        </div>
                        <>
                            <div className="form-field d-flex align-items-center">
                                <i className="fa fa-book" aria-hidden="true"></i>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="button" onClick={togglePasswordVisibility} className='border border-0'>
                                    {showPassword ? (
                                         <i className="bi bi-eye-slash"></i>
                                    ) : (
                                        <i className="bi bi-eye" aria-hidden="true"></i>
                                    )}
                                </button>
                            </div>
                        </>

                        <button onClick={loginHandler} className="btn btn-info mt-3 text-white fw-bold">Login</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default StudentLogin;
