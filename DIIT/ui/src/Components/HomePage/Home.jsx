import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import Typed from 'typed.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UniversalContext } from "../../context/universal";
import { Link } from "react-router-dom";
import TopCourseList from "../TopCourse/TopCourseList";
import LiveCards from "./Feature";
import FooterSlider from "../Footer/FooterSlider";
import ButtomToTop from "./Toast/ButtomToTop";
import TeamComponent from "./Team.";
import QueryForm from "./QueryFrom";
import Footer from "../Footer/Footer";
import Lock from "./LockWeb/Lock";
import { getAllNotice } from "../../api/adminApi/api";
import TimeTable from "./Features/TimeTable";
import NoticeBoard from "./Features/NoticeBoard";
import Testimonial from "./Testimonial";
import DarkMode from "../Darkmode/DarkMode";
// const [isDarkMode, setIsDarkMode] = useState(false);
function Home() {
    useEffect(() => {
        const greetUser = () => {
            const welcomeText = "नमस्कार, डृष्टी कम्प्यूटर सेंटर में आपका स्वागत है। हम आपकी उज्जवल भविष्य की कामना करते हैं।";
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(welcomeText);
                utterance.lang = 'hi-IN';
                window.speechSynthesis.speak(utterance);
            } else {
                console.error("Text-to-speech is not supported in your browser.");
            }
        };
        greetUser();
    }, []);
    const navigate = useNavigate();
    const [notice, setNotice] = useState([]);
    const aToken = localStorage.getItem('aJwt');
    const fetchNotice = async () => {
        try {
            const data = await getAllNotice();
            setNotice(data.message);
        } catch (error) {
            throw error;
        }
    }
    useEffect(() => {
        if (aToken) {
            navigate('/Admin');
        }
        fetchNotice();
    }, [])
    useEffect(() => {
        const typed = new Typed('#element', {
            strings: ['<span className="hideFont">“<b style="color:red !important;">Drishtee </b> envisions a world where all communities are empowered to achieve shared prosperity.”</span>'],
            typeSpeed: 55,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);
    // ---------------------Dynamic Carousel -----------------------
    const images = ['images/mainSlider/picB.png', 'images/mainSlider/picC.png', 'images/mainSlider/slider1.webp'];
    return (
        <div id="Home" >
            {/* <Lock /> */}
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner MainCarousel">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h1 data-aos="fade-down" data-aos-duration="1500">DRISHTEE COMPUTER CENTER </h1>
                                <p data-aos="fade-up" data-aos-duration="1500">A Complete I.T.institute</p> */}
                            </div>
                        </div>
                    ))}
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
            <div className="w-100 rounded-0 p-0 m-0" id="homeBg">
                <div className="row g-0 mb-0"  >
                    <div className="col-12" >
                        <div className="row p-4 cardBoxShadow m-1 justify-content-center" id='homeA'>
                            {/* <h1 className="fw-bolder py-2"> DIIT : Drishtee Institute of Information Technology </h1> */}
                            <div className="col-md-10">
                                <h5 className="fw-medium text-danger fw-bold my-3">WELCOME TO DRTISHTEE COMPUTER CENTER</h5>
                                <span className="lh-base">Drishtee Institute of Information Technology inaugurated at a new place Paragpur Road, next to Life Care Pharma, near Ramharsha Inter College, Nichaul, Maharajganj</span>
                            </div>
                            <div className="col-md-2 py-4">
                                <Link to="/contact" className="btn fw-medium border-0 text-primary shadow-sm mt-5">Call To Action </Link>
                            </div>
                        </div>
                        <p className="p-3 m-2 cardBoxShadow" id='homeB'>
                            <b style={{ color: 'rgb(1, 143, 1)' }} >Where Dreams come true</b> Drishtee Institute Of information Technology aims to impart Government approved & recognized courses in the field of computer application.....DIIT is a modern educational Institute setup to inculcate in its students values & attitude that will help them to keep up global perspective and work towards achieving high career grow. <br />
                            Drishtee Institute Of Information Technology in Nichlaul, Maharajganj is a reliable name in the industry as they aim to deliver the best experience to their customers. This has helped them build up a loyal customer base. They started their journey in 2005 and ever since, they have ensured that the customer remains at the centre of their business operations and philosophy.

                            {/* As they are located in a favourable neighbourhood, exactly at Paragpur Road, in side of Ramharsh inter collage, Nichlaul-273304, it is easy to locate Drishtee Institute Of Information Technology on the. For any kind of assistance or questions, it is best to contact them directly during their business hours. 
                             */}
                            <br />
                            <button className="btn btn-light px-3 btn-sm m-2"><Link to='About' className="nav-link text-primary "> View All </Link></button>

                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-4 py-4" id="CourseContainer" >
                <div className="row text-center d-flex justify-content-center">
                    <h1 className="fw-bolder text-danger" id="courseTitle" data-aos="fade-up" data-aos-duration="1000">TOP COURSE</h1>
                </div>
                <TopCourseList />
            </div>
            <TeamComponent />
            <div className="m-0">
                <div className="container-fluid py-5 m-1 mx-auto" id="">
                    <h2 className="py-2 text-danger fw-bolder" data-aos="fade-right" data-aos-duration="1500">
                        Features And Updates
                    </h2>
                    <center className="hideFont fw-medium" id="FeatureTextOne">
                        <span id="element"></span>
                    </center>
                    <p align="center" className="showFont" id="FeatureTextTwo">“ <b style={{ color: 'red' }}>Drishtee </b>
                        envisions a world where all communities are empowered to achieve shared prosperity.“
                    </p>
                    <div className="container-fluid pt-0 ">
                        <div className="row">
                            <TimeTable />
                            <NoticeBoard />
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />
            <LiveCards />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="row w-100 m-0" >
                            <div className="col-md-8 d-flex justify-content-center align-item-center m-auto p-2" >
                                <div classNa000me="row w-100" id='HomeOffer'>
                                    <h4 className="text-danger p-2">Hello Everyone....! here you can see your all offer's that update by the Institute.</h4>
                                    <div className="col-12 w-100 shadow py-2">{
                                        notice.map((data) => {
                                            return (
                                                <div key={data._id} className="fw-bolder w-100 my-3 p-0" data-aos="fade-right" data-aos-duration="1500" id={data._id}>
                                                    <h5 className="fw-bolder px-2">
                                                        <ul><li className="text-info">{data.title}</li></ul>
                                                    </h5>
                                                    <div className=" text-secondary ps-2 px-md-5 mx-3">
                                                        {data.nMessage}
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 py-4 m-0 p-0" style={{ overflowX: 'hidden' }}>
                                <div className="row m-auto" id="Myform" data-aos="fade-left" >
                                    <QueryForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ButtomToTop />
            <FooterSlider />
            <Footer />
        </div>
    );
}
export default Home;
