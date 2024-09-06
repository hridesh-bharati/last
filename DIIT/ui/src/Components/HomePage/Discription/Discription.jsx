import React from 'react';
import { Link } from 'react-router-dom';
export default function Description() {
    return (
        <div className="container-fluid m-0 p-0 py-4">
            <div className="row text-center myshadow my-4 pt-2" id="termaHead" style={{ color: 'black', background: 'white' }}>
                <div className="col-md-12 pt-2">
                    <h1>
                        <font color="red"> TERMS </font> OF USES
                    </h1>
                    <small className="d-flex px-2">
                        <Link to='/' className="nav-link hoverTextBlue">
                            <i className="fa fa-home"></i> / </Link> &nbsp; TERMS & CONDITIONS
                    </small>
                </div>
            </div>
            <div className="row" id="conditions">
                <div className="col-12 fw-bolder" style={{ borderBottom: 'var(--my-border)', color: 'var(--orangeTextColor)' }}>
                    <h3 className="px-3">TERMS & CONDITIONS</h3>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul>
                            <li className="hoverTextOrange">This official website of Drishtee Institute of Information Technology, Drishtee has been developed  to "provide information to the general public."</li>
                            <li className="hoverTextOrange">This website ‘drishtee institute of information technology ’ is designed and developed by drishtee's student (<b>Hridesh Bharati </b> & <b>Sushil Kandu</b>) and content provided by the drishtee departments. The documents and information displayed in this website are for reference purposes only and do not purport to a legal document.</li>
                            <li className="hoverTextOrange">These terms and conditions will be governed by Indian laws. Any dispute arising under these Terms and Conditions may be resolved by sending us an email or by contacting us.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
