import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Greating = () => {
    return (
        <div>
            <section className="row bg-white">
                <div className="col-12 p-2 text-center">
                    <span className="fw-700 mb-2 w-100 greatLine">Congratulations! <br /> 🎉🎉🎉🎉</span>
                    <h2 className="fw-700 mb-2">Your exam time has been completed!</h2>
                    <p className="small fw-400 mb-sm-5">Start working with DRISHTEE that can provide everything you need for Education.</p>
                    <div className="mx-auto btn btn-primary rounded-pill px-sm-5 px-4 py-sm-3 py-2 fs-18 fw-600">
                        <Link to="/" title="Home" className='nav-link fs-4'>
                            <i className="fa fa-home"></i> Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Greating;
