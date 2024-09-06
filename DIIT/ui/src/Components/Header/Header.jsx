import '../../App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { UniversalContext } from '../../context/universal';
import toggleDarkMode from '../Darkmode/DarkMode';
import { loginAdmin, sendOtpForRPsd, verifyOtpAndUpdatePsd } from '../../api/adminApi/api';
import { getCourseList } from '../../api/adminApi/api';
import { setCourses } from '../../store/reduxStore/student/studentSlice';
function Header() {
    const dispatch = useDispatch();
    const { setAdminLogin } = useContext(UniversalContext);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [fEmail, setFEmail] = useState("");
    const [nPsd, setNPsd] = useState("");
    const [tOtp, setTOtp] = useState("");
    const navigate = useNavigate();

    const fetchLoginAdmin = (async () => {
        if (email && password) {
            try {
                const rspns = await loginAdmin(email, password);
                if (rspns.ackbool == 1) {
                    localStorage.setItem('aToken', rspns.token);
                    setAdminLogin(true);
                    toast.success('Logged In')
                    navigate('/Admin');
                }
            } catch (error) {
                console.log('An Error occured while feching login admin profile ' + error)
            }

        } else {
            toast.error('Please fill the email and Password field');
        }
    })
    const sendOtpHandler = (async () => {
        try {
            console.log('sending')
            const rspns = await sendOtpForRPsd(fEmail);
            if (rspns.ackbool == 1) {
                toast.success(rspns.message);
            }
        } catch (error) {
            console.log('Some Error occured ' + error)
        }
    })
    const verifyOtpAndUpdatePsdHandler = (async () => {
        const rspns = await verifyOtpAndUpdatePsd(fEmail, tOtp, nPsd);
        if (rspns.ackbool == 1) {
            toast.success(rspns.message);
        }
    })
    const fetchCourses = (async () => {
        const rspns = await getCourseList();
        if (rspns.ackbool == 1) {
            dispatch(setCourses(rspns.message));
        }
    })

    const [isVisible, setIsVisible] = useState(false);
    const [islogin, setIslogin] = useState(false);
    const handleToggleVisibility = () => {
        setIsVisible(!isVisible);
        setIslogin(!islogin);
    };
    // const [isShowerify, setShowerify] = useState(false);
    // const Showerify = () => {x
    //     setShowerify(!isShowerify);
    // };
    const [isDarkMode, setIsDarkMode] = useState(false);
    // Start nav Link
    const courses = [
        { path: "/AllCourses", name: "All Computer Course" },
        { path: "/Certificate", name: "Computer Certificate" },
        { path: "/ComputerLanguage", name: "Computer Language" },
        { path: "/Designing", name: "Graphics Design" },
        { path: "/WebDev", name: "Web Development" },
        { path: "/CRepairing", name: "Computer Repairing" },
        { path: "/Nielet", name: "NIELIT Courses" },
        { path: "/Banking", name: "Banking Course" }
    ];
    const studentZoneItems = [
        { path: "/AdmissionForm", name: "New Admission" },
        { path: "/offer", name: "New Offer" },
        { path: "/verification", name: "Certification" },
        { path: "/StudentLogin", name: "Student Login" }
    ];
    // Handle navigation based on token presence
    const handleStudentLoginClick = () => {
        if (localStorage.getItem('sToken')) {
            navigate('/StudentHomePage');
        }
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg pb-0 fixed-top mb-4" id="TopNavBar">
                <div className="d-flex align-items-center justify-content-between fixed-top p-1"
                    style={{ height: '3rem', width: '100vw', fontSize: '0.7rem' }} id="toggleNav">
                    <Link className="navbar-brand" to="/">
                        <img src="images/icon/logo.png" className="logo" alt="DIIT" />
                    </Link>
                    <div className="TopWelcomeCenter d-flex align-items-center">
                        <marquee scrollamount="5">
                            <span className="text-light text-uppercase ">
                                <big style={{ letterSpacing: '1px' }}> Welcome to DRISHTEE COMPUTER CENTER</big>
                            </span>
                        </marquee>
                    </div>
                    <div className="ms-auto d-flex align-items-center justify-content-end pe-1 ">
                        <div className='d-flex align-items-center'> <button className="btn text-white fs-5 bi bi-sun" onClick={() => toggleDarkMode(isDarkMode, setIsDarkMode)} ></button>
                            <div className="nav-item" onClick={() => localStorage.getItem('aToken') && navigate('/Admin')}>
                                <button className="btn btn-small px-1 rounded-0 p-0 border-0 myDisplayflexRow AdminLogBtn rounded-3 p-2  px-4 flex-column text-white" type="button"
                                    data-bs-toggle="offcanvas" data-bs-target="#AdminCard" >Login</button>
                            </div></div>
                    </div>
                    <button className="navbar-toggler small p-1 m-0 border-0 bg MobileNavBtn" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
                        <span className="bi bi-three-dots-vertical small fs-6 text-light p-0 m-0 border-0"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex justify-content-around align-items-star px-4 MobileNav" id='MobileNav'>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/Course" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" onMouseOver={fetchCourses}>Course</Link>
                            <ul className="dropdown-menu rounded rounded-0 p-0 m-0 bgt " id="CourseListNav">
                                {courses.map((course, index) => (
                                    <li key={index} className='p-0 m-0'>
                                        <Link className="dropdown-item" to={course.path}>{course.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/branch" className="nav-link">Branch</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallary" className="nav-link">Gallery</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/StudentZone" role="button" data-bs-toggle="dropdown">Student Zone</Link>
                            <div>
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <ul className="dropdown-menu" id="studentZoneNav">
                                            {studentZoneItems.map((item) => (
                                                <li key={item.path}>
                                                    <Link
                                                        className="dropdown-item"
                                                        to={item.path}
                                                        onClick={item.path === "/StudentLogin" ? handleStudentLoginClick : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item mt-0 pt-0">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>

                    </ul>
                </div>
            </nav>

            <div className="offcanvas offcanvas-end shadow p-0 m-0" id="AdminCard" style={{ zIndex: '9999' }}>
                <div className="offcanvas-body p-0 m-0 fbcolor">
                    <div className="row mx-0 ">
                        <div className="col-3  mt-5">
                            <button type="button" className="btn btn-sm " data-bs-dismiss="offcanvas" aria-label="Close">
                                <i className="bi bi-arrow-left fw-bolder fs-3"></i></button>
                        </div>
                        <div className="col-12 pt-5" style={{ height: '100vh' }}>
                            <div className='d-flex align-content-center justify-content-center flex-column logincard w-100'>
                                <h2 className="text-center fw-bolder text-primary"><b>Admin Login</b></h2>
                                {
                                    !islogin && (
                                        <>
                                            <div className="mb-2">
                                                <input type='email' value={email} className="form-control rounded-4" placeholder='Enter id' aria-describedby="emailHelp"
                                                    onChange={(event) => { setEmail(event.target.value) }} />
                                            </div>
                                            <div className="mb-2">
                                                <input type="text" value={password} className="form-control rounded-4" placeholder='Password'
                                                    onChange={(event) => { setPassword(event.target.value) }} />
                                            </div>
                                            <button type="button" className="btn bg-primary text-white fw-bold my-1 rounded rounded-pill mt-3" onClick={() => { fetchLoginAdmin() }}>
                                                Log in
                                            </button>
                                        </>
                                    )
                                }

                                <button
                                    type="button"
                                    className="btn border-0 my-1"
                                    onClick={handleToggleVisibility}
                                >
                                    Forget Password?
                                </button>
                                <div className='container'>

                                    {isVisible && (
                                        <div className="forgot-password-container">
                                            <input type="email" value={fEmail} className="form-control" placeholder='Enter Your id'
                                                onChange={(event) => setFEmail(event.target.value)} />
                                            <button type="button" className="btn bg-warning btn-sm fw-bold my-1" onClick={sendOtpHandler}>Send OTP</button>
                                            <input
                                                type="text"
                                                className='form-control mt-3'
                                                autoFocus
                                                value={tOtp}
                                                onChange={(e) => { setTOtp(e.target.value) }}
                                                placeholder='Enter OTP'

                                            />
                                            <div className="text-center">
                                                <div className="forgot-password-container">
                                                    <input typetype="password" className='form-control my-2' onChange={(e) => { setNPsd(e.target.value) }} placeholder='New password' />
                                                    <input type="password" className='form-control my-1' placeholder='Repeat password' />
                                                    <button type="button" className="btn bg-primary text-white rounded-pill px-4 btn-sm my-1" onClick={verifyOtpAndUpdatePsdHandler}>Verify OTP and Update Password</button>
                                                </div>
                                            </div>
                                        </div>

                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
