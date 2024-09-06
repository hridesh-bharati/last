import React from 'react'

export default function StudentAbout() {
    return (
        <>
            <div>
                <div>
                    <h3 className="text-center text-danger fw-bolder HindiFont fs-2">दृष्टि कंप्यूटर सेंटर निचलौल</h3>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4 text-center mx-0 px-0">
                            <img src="./images/team/team4.jpg" width={140} alt="" />
                        </div>
                        <div className="col-md-8 mx-0 px-0 text-start small d-flex justify-content-start">
                            <table className='m-0 p-0 fw-bolder'>

                                <tr>
                                    <th className='textMaroon'>Student Name: </th>
                                    <td>Amit Kumar</td>
                                </tr>
                                {/* <tr>
                                    <th className='textMaroon'>Student Course: </th>
                                    <td>ADCA</td>
                                </tr> */}
                                <tr>
                                    <th className='textMaroon'>Student Id: </th>
                                    <td>DIIT124/ADCA/4</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class=" small text-start" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    <h4 className=" fw-bolder text-danger p-2 ms-2">About Amit Kumar</h4>
                    <p>Amit Kumar is the student of DRISHTEE INSTITUTE OF INFORMATION TECHNOLOGY, Nichlaul Maharajganj, Uttar-Pradesh 273305.</p>
                    <p>His father's name is Mohan Lal. This Bajahi post is a resident of Lady Farm Nichlaul Maharajganj. He has done the ADCA course from our Drishtee Computer Center Below.</p>
                </div>
            </div>
        </>
    )
}
