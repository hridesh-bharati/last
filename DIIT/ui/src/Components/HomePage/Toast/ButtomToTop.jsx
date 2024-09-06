import React from 'react';

function ScrollToTopButton() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={handleScrollToTop} className="btn btn-primary m-0 p-1 px-2" id="btnBackToTop"
            style={{ position: 'fixed', bottom: '25px', right: '10px' }}
            title="Scroll to Top">
            <i className="bi bi-arrow-up-circle-fill fs-5"></i>
        </button>

    );
}

function ButtomToTop() {
    return (
        <div style={{ zIndex: '999999' }}>
            <ScrollToTopButton />
        </div>
    );
}

export default ButtomToTop;
