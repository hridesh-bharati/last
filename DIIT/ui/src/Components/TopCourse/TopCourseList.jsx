import React from 'react';
import { Link } from 'react-router-dom';

const TopCourseList = () => {
  const images = [
    { src: "images/course/react.webp", title: "React", className: 'tcA' },
    { src: "images/course/graphic.webp", title: "Graphics Designing", className: 'tcB' },
    { src: "images/course/adca.png", title: "ADCA+", className: 'tcC' },
    { src: "images/course/web.png", title: "Web Development", className: 'tcD' },
    { src: "images/course/python.jpg", title: "Python Programming", className: 'tcE' },
    { src: "images/course/soft.png", title: "Software Development", className: 'tcF' },
    { src: "images/course/o-level.png", title: "O Level", className: 'tcG' },
    { src: "images/course/ccc.jpg", title: "CCC", className: 'tcH' },
  ];

  return (
    <div className="card-group " style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '5px' }}>
      {images.map((image, index) => (
        <div key={index} className={`card p-1 m-2 myshadow hoverCardE ${image.className}`} data-aos="zoom-in">
          <img src={image.src} className="img-fluid img-thumbnail h-100 card-img-top p-0 m-0" alt={image.title} />
          <div className="onshow"> <h1 className='fw-bolder'>{image.title}</h1>
            <>{[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`bi bi-star-fill ${index < 5 ? ' text-warning ' : 'text-muted'}`}
              ></i>
            ))}
            </>
          </div>
          <button className='btn btn-primary p-0 mt-1 rounded-0 bg-gradient btn-sm small'><Link to="/AdmissionForm" className='text-white nav-link'>Apply</Link></button>
        </div>
      ))}
    </div>
  );
};

export default TopCourseList;
