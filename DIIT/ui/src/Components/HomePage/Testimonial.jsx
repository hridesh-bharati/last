import React from 'react';

export default function Testimonial() {
    const testData = [
        {
            name: "Abhay Gautam",
            role: "Web Designer",
            image: "images/vender/abhay.jpg",
            text: "Joining Drishtee Computer Center was one of the best decisions I've made. The instructors are incredibly knowledgeable, and the hands-on approach helped me grasp complex web development concepts quickly. The course has opened up new career opportunities for me!"
        },
        {
            name: "Abhay Gautam",
            role: "Graphics Designer",
            image: "images/vender/abhay.jpg",
            text: "The Graphic Design course at Drishtee Computer Center exceeded my expectations. The curriculum was well-structured, and the faculty provided excellent guidance. I now feel confident in my design skills and have even started freelancing thanks to the skills I gained here."
        },
        {
            name: "Abhay Gautam",
            role: "Computer Operator",
            image: "images/vender/abhay.jpg",
            text: "As someone with no prior experience with computers, I was nervous about enrolling in a course. However, the patient and supportive environment at Drishtee Computer Center made learning enjoyable. I now feel much more confident using computers for both work and personal tasks."
        },
        {
            name: "Abhay Gautam",
            role: "Python Developer",
            image: "images/vender/abhay.jpg",
            text: "The Python Programming course at Drishtee Computer Center was fantastic. The instructors were always available to answer questions, and the projects were both challenging and rewarding. I highly recommend this course to anyone looking to dive into programming."
        }
    ];

    return (
        <div className="carousel slide text-center" id='TestimonialParent' data-bs-ride="carousel">
            <span className=" w-100 d-block text-center px-2">
                <h5 className="text-uppercase fw-bolder pt-4" data-aos="fade-up" data-aos-duration="500"
                    id="TestimonialHead"> What our DIIT students are saying about us </h5>
            </span>
            <div className="position-relative cardBoxShadow py-2 m-3" id="TestimonialChild">
                <div className="container m-auto position-relative" style={{ zIndex: 1 }}>
                    <div className="carousel-inner pb-4 my-4" >
                        {testData.map(({ name, role, image, text }, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="3000">

                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8 text-dark">
                                        <img className="cardBoxShadow" src={image} alt="DIIT Student" style={{ width: "150px", border: '8px solid var(--lightWhite)', borderRadius: '4rem 4rem 1rem 1rem' }} />
                                        <div className="fw-bold p-3 " style={{ width: '15rem', height: '4rem', margin: 'auto', background: 'var(--lightWhite) ', borderRadius: '4rem 4rem 0 0' }}>
                                            <h4 className="m-0 p-0">{name}</h4>
                                            <font color="#00beff">{role}</font>
                                        </div>
                                        <p id={`PortfolioText${index + 1}`} className='p-4 ' style={{ background: 'var(--lightWhite)', borderRadius: '4rem 4rem 0.5rem 0.5rem' }}>
                                            <span className="fw-normal" id={`testimoniaFirstText${index + 1}`}>
                                                {text}
                                            </span>
                                            <br />
                                        </p>
                                    </div>
                                </div>
                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <li key={starIndex}><i className="bi bi-star-fill"></i> </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
