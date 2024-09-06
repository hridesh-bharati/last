import React from 'react';

const cardData = [
    {
        imageUrl: "images/icon/projector.png",
        title: "Live Projects",
        text: "To work on real-time projects.",
        duration: 300,
        className: 'liveA',
    },
    {
        imageUrl: "images/icon/trainers.png",
        title: "Expert Trainers",
        text: "Learn from certified & experienced trainers.",
        duration: 600,
        className: 'liveB',
    },
    {
        imageUrl: "images/icon/course2.png",
        title: "Globally Recognized Certificates",
        text: "Our Certificates are valued by top corporates.",
        duration: 900,
        className: 'liveC',
    },
    {
        imageUrl: "images/icon/practical.gif",
        title: "Hands on Training",
        text: "100% Practical based training model.",
        duration: 1200,
        className: 'liveD',
    }
];

export default function LiveCards() {
    return (
        <div className="card-group py-5 mx-3 fixed-position" id="liveCards">
            <span className="w-100 d-block text-center h2 fw-bolder">
                <p id="LiveWork" className='textColorOne'> WHY CHOOSE DRISHTEE </p>
                <center>
                    <small className="h6 fw-normal">We are a modern and inviting institute perfectly suited for students, providing all educational materials here.</small>
                    <hr size="5" color="yellow" width="20%" />
                </center>
            </span>
            {cardData.map((card, index) => (
                <div
                    key={index}
                    className={`card text-center m-2 border-secondary myshadow ${card.className}`}
                    data-aos="fade-up"
                    data-aos-duration={card.duration}
                    id='FeatureCard'
                >
                    <img
                        className="card-img-top mt-2 rounded mx-auto d-block"
                        src={card.imageUrl}
                        alt={card.title}
                        style={{ width: '70px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder" id={`liveHead${index + 1}`} style={{ color: 'blue' }}>
                            {card.title}
                        </h5>
                        <p className="card-text" id={`liveText${index + 1}`}>
                            {card.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
