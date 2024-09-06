import React, { useState, useEffect, useContext } from "react";
import { toast } from 'react-toastify';
import { UniversalContext } from "../../context/universal";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import QueryForm from "../HomePage/QueryFrom";
function Contact() {
    const contactCards = [
        {
            iconClass: "fa fa-home fs-2",
            title: "VISIT-AT",
            addresses: [
                "Paragpur raod Near Ramharsh Inter Collage Nichlaul Maharajganj U.P.",
                "Main market Road in front of Rauniyar chitra mandir Thoothibari Maharajganj U.P."
            ]
        },
        {
            iconClass: "bi bi-telephone-fill fs-2",
            title: "CALL-US",
            contacts: [
                { title: "Mr. Ajay Tiwari", number: "9918151032" },
                { title: "Mr Santosh Singh Chauhan", number: "7398889347" }
            ]
        },
        {
            iconClass: "bi bi-envelope-fill   fs-2",
            title: "E:Mail-US",
            emails: [
                { title: "Mr. Ajay Tiwari", email: "ajtiwari@gmail.com" },
                { title: "Mr Santosh Singh Chauhan", email: "chauhansantosh045@gmail.com" }
            ]
        }
    ];

    return (
        <div>
            <div className="container-fluid mx-0 px-0 MT3">
                <div className="row m-0 p-0" id="contact">
                    <div className="col-12 py-4 d-flex justify-content-center flex-column align-items-center" >
                        <span className=" w-100 d-block text-center ">
                            <div data-aos="fade-down">
                                <h1 className=" fw-bolder text-danger">
                                    CONTACT-US
                                </h1>
                            </div>
                        </span>
                        <div data-aos="fade-up">
                            <h5 className="text-primary fw-bolder d-flex my-1">
                                <Link to="/Home" className="nav-link fw-bolder text-info ">
                                    <i className="fa fa-home "></i> HOME </Link>
                                &nbsp;/CONTACT US
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="row m-0 p-0 d-flex align-items-start justify-content-center mb-5 fw-bolder" >
                    {contactCards.map((card, index) => (
                        <div key={index} className="card p-0 m-0 my-2 col-md-4 transparentTableData border border-0  ">
                            <div className="row m-0 p-0 d-flex justify-content-center">
                                <div className="col-11 rounded rounded-25  m-0 p-0 ZoomCard  myshadow " data-aos="zoom-in">
                                    <div className="card-header  text-white text-center"
                                        style={{ background: 'var(--cardHeadColor )', color: 'white' }}>
                                        <div data-aos="fade"> <i className={card.iconClass}></i>
                                            <h1 className="fw-bold "><b>{card.title}</b></h1>
                                        </div>
                                    </div>
                                    <div className="card-body fw-normal">
                                        {card.addresses && card.addresses.map((address, index) => (
                                            <p key={index}><i className="bi bi-geo-alt-fill text-danger"></i>{address}</p>
                                        ))}
                                        {card.contacts && card.contacts.map((contact, index) => (
                                            <p key={index} title={contact.title}><i className="bi bi-telephone text-danger "></i>{contact.number}</p>
                                        ))}
                                        {card.emails && card.emails.map((email, index) => (
                                            <p key={index} title={email.title}><i className="bi bi-send text-danger"></i>{email.email}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="row d-flex justify-content-between mx-1">
                <div className="col-md-6 cardBoxShadow m-0 p-0 mb-2 h-100" data-aos="fade-right"
                    data-aos-duration="500" id='aboutContact'>
                    <div className="px-2 m-1"> <QueryForm /></div>
                </div>
                <div className="col-md-6  cardBoxShadow m-0 p-0 mb-2 h-100" id='aboutMap' data-aos="fade-left">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56717.06933081362!2d83.65242092167965!3d27.318920499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399419806e859715%3A0x542e82fbb42e0941!2sDRISHTEE%20INSTITUTE%20OF%20INFORMATION%20TECHNOLOGY%20NICHLAUL!5e0!3m2!1sen!2sin!4v1697193938273!5m2!1sen!2sin"
                        width="100%" height="430" style={{ border: '0' }} className="p-3"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;

