import React from 'react';

export default function Slider() {
    const carouselItems = [
        { src: './images/vender/pooja.jpg', alt: 'DIIT' },
        { src: './images/vender/lab2.jpg', alt: 'DIIT' },
    ];
    const controls = [{ type: 'prev', iconClass: 'carousel-control-prev-icon', label: 'Previous' }, { type: 'next', iconClass: 'carousel-control-next-icon', label: 'Next' }];
    return (<div>            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">                <div className="carousel-inner">{carouselItems.map((item, index) => (<div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="2000" >
        <img src={item.src} className="d-block w-100 img-fluid h-100" alt={item.alt} />
    </div>
    ))}
    </div>
        {/* <>{controls.map((control) => (<button key={control.type} className={`carousel-control-${control.type}`} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide={control.type} aria-label={control.label}               >                    <span className={control.iconClass} aria-hidden="true"></span> <span className="visually-hidden">{control.label}</span></button>))}      
          </> */}
    </div>
    </div>);
}