import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../../App.css';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import DarkMode from '../Darkmode/DarkMode';
export default function App() {
    const BgTeam = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px'
    }
    const expertData = [
        {
            name: "Mr. Ajay Tiwari",
            role: "Owner of DIIT",
            image: "images/team/team1.png"
        },
        {
            name: "Santosh Singh Chauhan",
            role: "Manager",
            image: "images/team/team2.png"
        },
        {
            name: "Manjesh Vishwakarma",
            role: "Teacher",
            image: "images/team/team3.png"
        },
        {
            name: "Hridesh Bharati",
            role: "Teacher",
            image: "images/team/team4.jpg"
        }
    ];

    return (
        <div className="m-3" >
            <div className='py-1 cardBoxShadow' id='team'>
                <span className="w-100 d-block text-center">
                    <h1 className="fw-bolder text-danger py-3" data-aos="fade-right" data-aos-duration="500" style={{ textShadow: '1px 2px 2px white' }}> Expert Instructors </h1>
                </span>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 350,
                        modifier: 1,
                        slideShadows: true,
                    }}

                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Autoplay]}
                    className="mySwiper"
                >
                    {expertData.map((expert, index) => (
                        <SwiperSlide key={index} className='swiper-slide teamcard m-3'>
                            <div className="card px-5 py-2 team m-2 text-center rounded border-white" id={`expert${index + 1}`}>
                                <img src={expert.image} style={{ border: '5px solid white' }} className="card-img-top img-size rounded-circle" alt={expert.name} />
                                <span className="w-100 fw-bold" style={{ color: 'red' }}>{expert.name}</span>
                                <small className="fw-normal text-center text-success">{expert.role}</small>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
