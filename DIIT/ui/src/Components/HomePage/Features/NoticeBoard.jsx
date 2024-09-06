import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../../PauseMarquee/PauseMarquee';

const NoticeBoard = () => (
    <div className="col-md-6 my-1 p-0 px-lg-1 px-md-0">
        <div className="cardBoxShadow border-0" >
            <div className="card-header h4 p-2 text-white text-start" 
            style={{ background: 'var(--cardHeadColor)' }}>
                <div data-aos="fade-right">
                    <i className="bi bi-bell-fill text-warning"></i> NOTICE BOARD
                </div>
            </div>
            <div className=" fw-normal my-0 py-0 p-2 smallText"  id='noticeBg'>
                <Marquee direction="up" scrollamount="3" className='transparentTableData' behavior="scroll">
                    {notices.map((notice, index) => (
                        <React.Fragment key={index}>
                            <small>
                                {notice.text}
                                {notice.imageSrc && <img src={notice.imageSrc} className="img-fluid" width="40px" alt="icon" />}
                            </small>
                            <hr width="90%" />
                        </React.Fragment>
                    ))}
                </Marquee>
            </div>
            <Marquee className="py-0  my-0" behavior="scroll" direction="left">
                <Link to="/Verification" className="blink smallText">
                    <b>अपनी प्रमाणपत्र की स्थिति जानने के लिए क्लिक करें</b>
                </Link>
            </Marquee>
        </div>
    </div>
);
const notices = [
    { text: "Course certified by Microsoft." },
    { text: "CCC free on ADCA course", imageSrc: "images/icon/gifPic.gif" },
    { text: "Free English Speaking & Personality Development classes", imageSrc: "images/icon/gifPic.gif" },
    { text: "प्रत्येक पाठ्यक्रम के पूरा होने पर नि: शुल्क प्रमाण पत्र।" },
    { text: "GOVT. recognized institute" },
];
export default NoticeBoard;
