import React from 'react';
import { Link } from 'react-router-dom';
import callIcon from '/images/icon/call.gif';

const customMobileNumber = '7267995307';
const title = 'Hello! Mr. Ajay Tiwari* ';

const generateWhatsAppLink = () => {
    const shareMessage = encodeURIComponent(title);
    return `https://wa.me/${customMobileNumber}?text=${shareMessage}`;
};

const addressData = {
    address1: 'Paragpur Road Near Ramharsh Inter College Nichlaul.',
    address2: 'Main Market Road in front of Rauniyar Chitra Mandir Thoothibari.',
    phoneNumbers: [
        { name: 'Mr. Ajay Tiwari', number: '9918151032' },
        { name: 'Santosh Singh Chauhan', number: '7398889347' },
        { name: 'Manjesh Vishwakarma', number: '9621444858' },
        { name: 'Hridesh Bharati', number: '7267995307' },
    ],
};

const quickLinksData = [
    { text: 'Home', link: '/' },
    { text: 'Branch', link: '/branch' },
    { text: 'DOEACC Course', link: '/NielitCourse' },
    { text: 'Diploma Courses', link: '/diploma' },
];

const otherLinksData = [
    { text: 'Certificate Verification', link: '/verification' },
    { text: 'New Admission', link: '/admissionForm' },
    { text: 'Enquire', link: '/contact' },
    { text: 'Term & Conditions', link: '/Description' },
];

const newsUpdatesData = [
    'O level only 14999 Rs.',
    'CCC free on ADCA',
    'Assignments on every module.',
    'Projects based class',
];

const links = [
    {
        to: generateWhatsAppLink(),
        iconClass: 'bi-whatsapp',
        backgroundColor: '#19960e',
        title: 'WhatsApp share'
    },
    {
        to: '#',  // Placeholder for YouTube link
        iconClass: 'bi-youtube',
        backgroundColor: 'red',
        title: 'YouTube'
    },
    {
        to: 'https://www.facebook.com/DrishteeInstituteOfComputerTechnology?mibextid=ZbWKwL',
        iconClass: 'bi-facebook',
        backgroundColor: 'blue',
        title: 'Go to Facebook page'
    }
];

function Footer() {
    return (
        <footer className="text-white text-lg-start py-4 m-0" id="MyFooterColor"
            style={{ background: 'var(--cardHeadColorDark)' }}>
            <div className="container-fluid border-bottom">
                <div className="row">
                    {/* Column 1: ADDRESS */}
                    <div className="col-md-4 mb-4 mb-md-0 p-0">
                        <b data-aos="fade-down" className="ms-1" style={{ color: 'orange' }}>
                            <i className="fa fa-home text-white"></i> ADDRESS
                        </b>
                        <hr className="m-0 p-0" />
                        <table className="table mytable table-striped-columns mt-1">
                            <tbody className="font-weight-normal">
                                <tr>
                                    <td data-aos="fade-right" data-aos-duration="100">
                                        <i className="bi bi-geo-alt-fill text-danger"></i><span>{addressData.address1}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-aos="fade-right" data-aos-duration="100">
                                        <i className="bi bi-geo-alt-fill text-danger"></i><span>{addressData.address2}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-aos="fade-right" data-aos-duration="200">
                                        <div className="d-flex flex-wrap">
                                            {addressData.phoneNumbers.map((phone, index) => (
                                                <div key={index} className="d-inline-flex align-items-center mb-2 me-4">
                                                    <img src={callIcon} alt="Call Icon" />
                                                    <span className="d-inline-block ms-2" title={phone.name}>+91 {phone.number}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <b data-aos="fade-down" style={{ color: 'orange' }}>
                            <i className="fa fa-tags text-white"></i> QUICK LINKS
                        </b>
                        <hr className="m-0 p-0" />
                        <div className="row">
                            <div className="col-6">
                                <table className="table text-white table-striped-columns mt-1 footer-table">
                                    <tbody className="font-weight-normal">
                                        {quickLinksData.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <Link className="nav-link icon-link icon-link-hover" to={item.link} data-aos="fade-right" data-aos-duration="100">
                                                        <i className="bi bi-arrow-right-short d-flex align-items-center"></i>
                                                        {item.text}
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-6">
                                <table className="table text-white table-striped-columns mt-1 footer-table">
                                    <tbody className="font-weight-normal">
                                        {otherLinksData.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <Link className="nav-link icon-link icon-link-hover" to={item.link} data-aos="fade-right" data-aos-duration="100">
                                                        <i className="bi bi-arrow-right-short d-flex align-items-center"></i>
                                                        {item.text}
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: NEWS & UPDATES */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <b data-aos="fade-down" style={{ color: 'orange' }}>
                            <i className="bi bi-newspaper text-white"></i> NEWS & UPDATES
                        </b>
                        <hr className="m-0 p-0" />
                        <table className="table text-white table-striped-columns mt-1 footer-table mytable">
                            <tbody className="font-weight-normal">
                                {newsUpdatesData.map((update, index) => (
                                    <tr key={index}>
                                        <td data-aos="fade-right" data-aos-duration="300">{update}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td data-aos="fade-right" data-aos-duration="300" className="d-flex justify-content-evenly">
                                        {links.map((link, index) => (
                                            <Link key={index} to={link.to} className={`nav-link ${link.iconClass ? 'text-success border-primary' : 'text-info border-info'}`}>
                                                {link.iconClass ? (
                                                    <i className={`bi ${link.iconClass} fs-4 text-white px-2 py-1`} title={link.title} style={{ background: link.backgroundColor, borderRadius: '5px' }}></i>
                                                ) : (
                                                    <img src={link.imgSrc} className="img-fluid" title={link.title} style={{ width: link.imgWidth }} alt={link.imgAlt} />
                                                )}
                                            </Link>
                                        ))}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="p-3 text-center small" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} id="lastFooter">
                &copy; 2024 DIIT All Rights Reserved | Developed by : DIIT STUDENT <b className="text-warning">Hridesh Bharati & Sushil Kandu</b>
            </div>
        </footer>
    );
}

export default Footer;
