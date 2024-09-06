import React from 'react'

export default function ResetPassword() {
    return (
        <div>
            <div className="col-12 pt-5" style={{ height: '100vh' }}>
                <div className='d-flex align-content-center justify-content-center flex-column logincard w-100'>
                    <h2 className="text-center fw-bolder text-primary"><b>Admin Login</b></h2>
                    {
                        !islogin && (
                            <>
                                <div className="mb-2">
                                    <input type='email' value={email} className="form-control rounded-4" placeholder='Enter your id' aria-describedby="emailHelp"
                                        onChange={(event) => { setEmail(event.target.value) }} />
                                </div>
                                <div className="mb-2">
                                    <input type="text" value={password} className="form-control rounded-4" placeholder='password'
                                        onChange={(event) => { setPassword(event.target.value) }} />
                                </div>
                                <button type="button" className="btn bg-primary text-white fw-bold my-1 rounded rounded-pill mt-3" onClick={() => { fetchLoginAdmin() }}>
                                    Log in
                                </button>
                            </>
                        )
                    }

                    <button
                        type="button"
                        className="btn border-0 my-1"
                        onClick={handleToggleVisibility}
                    >
                        Forget Password?
                    </button>
                    <div className='container'>

                        {isVisible && (
                            <div className="forgot-password-container">
                                <input type="email" value={fEmail} className="form-control" placeholder='Enter Your id'
                                    onChange={(event) => setFEmail(event.target.value)} />
                                <button type="button" className="btn bg-warning btn-sm fw-bold my-1" onClick={sendOtpHandler}>Send OTP</button>
                                <input
                                    type="text"
                                    className='form-control mt-3'
                                    autoFocus
                                    value={tOtp}
                                    onChange={(e) => { setTOtp(e.target.value) }}
                                    placeholder='Enter OTP'

                                />
                                <div className="text-center">
                                    <div className="forgot-password-container">
                                        <input typetype="password" className='form-control my-2' onChange={(e) => { setNPsd(e.target.value) }} placeholder='New password' />
                                        <input type="password" className='form-control my-1' placeholder='Repeat password' />
                                        <button type="button" className="btn bg-primary text-white rounded-pill px-4 btn-sm my-1" onClick={verifyOtpAndUpdatePsdHandler}>Verify OTP and Update Password</button>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}
