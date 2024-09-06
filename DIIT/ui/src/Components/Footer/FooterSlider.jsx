import React from 'react';
import '../../App.css';
const pic = 'images/thumbnails';
const images = [
    `${pic}/python-img.png`,
    `${pic}/bootstrap.png`,
    `${pic}/sass.png`,
    `${pic}/dtp.png`,
    `${pic}/ccc.png`,
    `${pic}/c-lang.png`,
    `${pic}/python-img.png`,
    `${pic}/sass.png`,
    `${pic}/tally.png`,
    `${pic}/pm70.png`,
    `${pic}/ms_office.png`,
    `${pic}/js.png`,
    `${pic}/funda.png`,
];

const FooterSlider = () => (
    <marquee
        behavior="scroll"
        direction="left"
        scrollamount="3"
        className="mySwiper p-0 m-0 border-secondary border-bottom d-flex align-content-center"
        id="thumblain"
        style={{ background: '#00062B', padding: '5px' }}
    >
        {[...images, ...images].map((image, index) => (
            <img key={index} src={image} className='img-fluid m-3' alt={`Thumbnail ${index + 1}`} />
        ))}
    </marquee>
);

export default FooterSlider;
