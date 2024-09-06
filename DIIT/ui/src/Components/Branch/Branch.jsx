import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import toggleDarkMode from '../Darkmode/DarkMode';
import SwiperDemo from './Slider';
import Footer from '../Footer/Footer';
function Branch() {
    useEffect(() => {
        const typed = new Typed('#typingAmt', {
            strings: ['Growing.', 'Faster.', 'Bigger.'],
            typeSpeed: 50,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    const contactDetails = [
        {
            type: 'email',
            href: 'mailto:santoshchauhan@gmail.com',
            text: 'chauhansantosh045@gmail.com',
            icon: null,
            className: 'col-7',
        },
        {
            type: 'phone',
            href: 'tel:+917398889347',
            text: '7398889347',
            icon: 'images/icon/call.gif',
            className: 'col-4',
        }
    ];

    return (
        <div  >
            <div className="mx-sm-0 px-sm-0 px-0 MT3">
                <div className="myshadow" >
                    <div className="row border-0 p-0 m-0" >
                        <div className="col-md-6 p-0">
                            <SwiperDemo />
                        </div>
                        <div className="col-md-6" style={{ background: 'var(--cardHeadColorDark)' }} id='branchBgCard'>
                            <div className="row">
                                <div className="col-md-12 text-warning fw-bolder pt-4" data-aos="fade-up" data-aos-duration="1000">
                                    <h3 className="fw-bolder">WELCOME TO DRISHTEE COMPUTER CENTER </h3>
                                    <h6 className="p-2">
                                        <span>Branch:-</span>
                                        Main Market road in front of Rauniyar chitra mandir, Thoothibari
                                        Maharajganj
                                    </h6>
                                </div>
                            </div>
                            <div className="row " data-aos="fade-down" data-aos-duration="2000">
                                <div className="col-12" style={{ color: 'white' }}>
                                    <h3 className="px-md-4 fw-bolder">We Provide High-Quality Education For Everyone</h3>
                                    <p className="px-md-4">
                                        Drishtee Institute of Technology is started as one of the best Technical
                                        computer institutes in the year 2018.
                                        Drishtee Institute of Technology is established under the best computer center Education Trust in Thoothibari.
                                        <br />
                                       <br />
                                        <button className="button btn btn-primary btn-sm yellow-btn fw-bolder m-0 p-2 py-1" data-aos="fade-down">
                                            <Link to="/Contact" className="nav-link"> Contact <i className="bi bi-arrow-right-short"></i> </Link>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center fs-4 fw-bold">
                    <div className="row">
                        <div className="col-12 my-3" id="BranchTypingText">
                            <small>
                                Drishtee Computer Center is{' '}
                                <span className="text-warning" id="typingAmt"></span>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-100 rounded-0 mb-4" style={{ background: 'var(--mainBgColor)' }} >
                <div className="row g-0 m-3 mb-0">
                    <div className="col-12">
                        <div className="row py-5 px-2 text-white align-items-center justify-content-center" style={{ background: "var(--card-bg2)" }}  id='branchChild'>
                            <div className="col-md-12">
                                <h2 className="fw-bolder">Welcome to Drishtee computer center thoothibari</h2>
                                <span className="lh-sm">
                                    This IT institute is a highly modern huge building hosting various labs, workshop, lecture, tutorial rooms etc... The main focus of the society is "knowledge based society needs youth for its innovations and also give a lead to the world." Therefore, it was felt that an academic, technical and professional institute of global standards needs to be established at Nichlaul.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row text-white" style={{ background: 'var(--dark-blue2)' }} id="shortContact">
                    <div className="col-12 py-4">
                        <div className="row my-4 d-flex align-items-center">
                            <div className="col-md-6 text-uppercase" data-aos="fade-right">
                                For More Informations to contact us &nbsp;
                                <img src="images/icon/arrow.png" width="50px" alt="Arrow Icon" />
                            </div>
                            <div className="col-md-6">
                                <div className="row d-flex justify-content-center">
                                    {contactDetails.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`bg-warning yellow-btn border border-light fw-medium px-1 py-4 mx-1 my-3 d-flex justify-content-center ${item.className}`}
                                            title="Santosh Singh Chauhan"
                                            data-aos="fade-right"
                                            data-aos-duration="1000"
                                        >
                                            {item.icon && <img src={item.icon} width="20px" alt={`${item.type} Icon`} />}
                                            <Link to={item.href} className="nav-link">{item.text}</Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0 p-0 mt-4">
                <div className="col-12 p-0 m-0">
                    <div className="card border border-0 rounded rounded-0">
                        <div className="card-header h4 text-white rounded rounded-0" style={{ background: 'var(--d-blue)' }}>
                            <div data-aos="fade-right">
                                <i className="bi bi-geo-alt-fill"></i> Location
                            </div>
                        </div>
                        <div className="card-body m-0 p-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.3484879661028!2d83.69061145032624!3d27.427248144117375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39942392249c9073%3A0x6b62ef81415149dd!2sDrishtee%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1696133570458!5m2!1sen!2sin"
                                width="100%" height="500px" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div />
            <Footer />
        </div>
    );
}

export default Branch;
