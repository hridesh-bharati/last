import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { UniversalContext } from "../../context/universal";
function QueryForm() {
    const [verified, setVerified] = useState(false);
    const [fullName, setFullName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [query, setQuery] = useState('');
    const { adminLogin } = useContext(UniversalContext);
    const navigate = useNavigate();
    const clrqury = () => {
        setFullName('');
        setMobile('');
        setEmail('');
        setTitle('');
        setQuery('');
    }
    const sendQuery = async () => {
        if (fullName && mobile && email && title && query) {
            await fetch("http://localhost:3000/queryNow", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fullName, mobile, email, title, query })
            }).then(res => res.json())
                .then((res) => {
                    if (res.mError) {
                        toast.error('Some Error Occurred');
                    } else {
                        const audio = new Audio("/audio/ring.mp3");
                        audio.play();
                        toast.success('Query has been Sent');
                        clrqury();
                    }
                }).catch((error) => {
                    console.log(error)
                })
        }
    }
    useEffect(() => {
        const aToken = localStorage.getItem('aJwt');
        if (aToken) {
            navigate('/Admin');
        }
    }, [])
    function onChange(value) {
        setVerified(true)
    }
    return (
        <div id="queryformBg">
            <div className="m-1 border p-2 myshadow2">
                <div className=" col-md-12 position-relative my-2">
                    <h1 className="p-3 fw-bolder text-center text-uppercase text-white " id="signUpNow" style={{ background: 'var(--topNavBgColor)' }}>
                        Enquiry Now
                    </h1>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Full Name*" value={fullName} onChange={(event) => { setFullName(event.target.value) }}
                            required />
                    </div>
                </div>
                <div className="col-md-12 position-relative my-2 ">
                    <div className="input-group ">
                        <input type="tel" className="form-control" placeholder="Enter Your Mobile*" value={mobile} onChange={(event) => { setMobile(event.target.value) }} />
                    </div>
                </div>
                <div className="col-md-12 position-relative my-2">
                    <div className="input-group">
                        <input type="email" className="form-control"
                            placeholder="Enter Your E-mail*" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                    </div>
                </div>
                <div className=" col-md-12 position-relative my-2 ">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder=" Enter Title*"
                            value={title} required onChange={(event) => { setTitle(event.target.value) }} />
                    </div>
                </div>
                <div className="col-md-12 position-relative">
                    <textarea className="form-control" rows="3"
                        placeholder="Type Your Enquiry*" value={query} onChange={(event) => { setQuery(event.target.value) }}></textarea>
                </div>
                <div className="col-12 my-1 text-center py-2 mx-0 px-0 d-flex justify-content-between">
                    <button className="btn btn-primary fw-medium text-white mx-1 px-5 w-100" onClick={() => clrqury()}> Reset </button>
                    <button className="btn fw-medium text-white mx-1 px-5 w-100" style={{ background: 'green' }} onClick={sendQuery}> Send </button>
                </div>
            </div>
        </div>
    );
}
export default QueryForm;
