import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import submitBtn from '/images/icon/submitBtn.png'
import Time from "../Time/Time";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImportantGuids from "./ImportantGuids";
import Loader from "./Loader";
import Marquee from "../PauseMarquee/PauseMarquee";
import Footer from "../Footer/Footer";
import { registrateStudent } from "../../api/studentApi/api"
import { getCourseList } from '../../api/adminApi/api';
const AdmissionForm = (() => {
  const [uploadStatus, setUploadStatus] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState('');
  const [image, setImage] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [gender, setGender] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");
  const [course, setCourse] = useState("");
  const [category, setCategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [courseList, setCourseList] = useState([]);
  let courses = [];
  useEffect(() => {
    fetchCourseHandler()
    if (
      name && fatherName && motherName && gender && address && mobileNumber && dob && course && category &&
      (category !== 'other' || otherCategory) && checkboxChecked
    ) {
      setSubmitEnabled(true);
    } else {
      setSubmitEnabled(false);
    }
  }, [name, fatherName, motherName, gender, address, mobileNumber, dob, course, category, otherCategory, checkboxChecked]);

  const fetchCourseHandler = (async () => {
    try {
      const rspns = await getCourseList();
      if (rspns.ackbool == 1) {
        let crss = rspns.message;
        crss.forEach((crs) => {
          courses.push(crs.name)
        })
        console.log(crss)
        setCourseList(courses);
        console.log(courses)
      }
    } catch (error) {
      console.log(error)
    }

  })
  const clrform = (() => {
    setImage('');
    setPhoto('');
    setName('');
    setFatherName('');
    setMotherName('');
    setGender('');
    setAddress('');
    setAadhaar('');
    setEmail('');
    setMobileNumber('');
    setDob('');
    setCourse('');
    setCategory('');
    setUploadStatus(false);
  });

  const postForm = async () => {
    const requestBody = {
      photo,
      name,
      fatherName,
      motherName,
      gender,
      address,
      aadhaar,
      email,
      mobileNumber,
      dob,
      course,
      category
    };
    const rspns = await registrateStudent(requestBody);
    if (rspns.ackbool == 1) {
      toast.success(rspns.message);
      setSubmit(true);
      clrform();
    }
  };

  const uploadPhoto = () => {
    if (image) {
      setUploading(true);
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "hridesh99!");
      data.append("cloud_name", "draowpiml");
      fetch("https://api.cloudinary.com/v1_1/draowpiml/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            setPhoto(data.url);
            setUploadStatus(true);
          }
        })
        .catch((error) => {
          setMessage('Network Error Occured');
        })
        .finally(() => {
          setUploading(false);
        });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= 100 * 1024) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setImage(file);
          setUploadStatus(false);
          setError("");
        };
        fileReader.readAsDataURL(file);
      } else {
        setImage(null);
        setUploadStatus(false);
        setError("Upload only images smaller than 100 KB.");
      }
    }
  };

  const [AdmBg, setAdmBg] = useState('var(--admHeadColor)')
  const [AdmText, setAdmText] = useState('maroon')
  const [AmdBodyColor, setAmdBodyColor] = useState('#fff')
  const [AdmFooterBg, setAdmFooterBg] = useState('var(--admHeadColor)')
  const [AdmFooterText, setAdmFooterText] = useState('maroon')
  const [GuidBg, setGuidBg] = useState('pink')
  const [GuidText, setGuidText] = useState('maroon')

  return (
    <>

      <div className="row d-flex mx-0 px-0 MT3 align-items-center justify-content-center">
        <div className="col-12 fw-bolder text-center pt-4 shadow-sm  border border-bottom "
          style={{ color: AdmText, background: AdmBg }} id="AdmForm">
          <h3 className="fs-1"> <b style={{ color: "maroon" }}>CANDIDATE REGISTRATION FORM FOR NEW ADMISSION</b> </h3>
          <p className="fs-5 body-text-secondary">
            <Marquee behavior="alternate" scrollamount='5' style={{ color: "maroon" }}> ऑनलाइन पंजीकरण करने हेतु पंजीकरण फॉर्म </Marquee>
            <Link to="/Verification" className="blink fs-6"><b> <img src="images/icon/update.gif" width="30px"
              alt="Updates" /> अपनी प्रमाणपत्र की स्थिति जानने के लिए क्लिक करें </b></Link>
          </p>
        </div>
      </div>
      <div style={{ background: AmdBodyColor }} >
        <div className="mainRegContainer" >
          <div className="row  d-flex align-items-center justify-content-center mx-0 px-0">
            <div style={{ background: 'maroon' }}>
            </div>
            <div className="col-12 mx-0 px-1" style={{ color: 'maroon', borderTop: 'var(--my-border)' }}>
              <div className="row small mx-0 px-0" style={{ color: GuidText, background: GuidBg }} id='AdmGuidBg'>
                <div className="col mx-0 px-0 d-flex justify-content-between">
                  <ImportantGuids />
                  <Time />
                </div>
              </div>
              <div className="container-fluid shadow-lg my-3 py-2 px-3">
                <div className="row bg-primary shadow shadow-sm border border-primary">
                  <div className="col-12 pt-2 text-center">
                    <h1 className="fw-bolder text-uppercase" style={{ color: 'white' }} id="RegHead"> Student Addmission form </h1>
                  </div>
                </div>
                <div className="my-5">
                  <h5 className="text-primary fw-bolder">(A) Student Details</h5>
                  <div className="row py-2 chocolateBorder bg-primary-subtle">
                    <div className="col-md-6 bgps my-2">
                      <label htmlFor="formFileSm" className="form-label">1: Upload your Photo <span
                        className="text-body-secondary"> / अपनी फ़ोटो अपलोड करें</span>
                        <font color="red">*</font>
                      </label>

                      <div className="input-group mb-3">
                        <i className="bi bi-image input-group-text rounded-0 "></i>
                        <input
                          className="form-control form-control-sm py-2 rounded-0"
                          id="formFileSm"
                          type="file"
                          onChange={handleFileChange}
                        />
                        {uploadStatus && <span className="small d-flex align-items-center px-1">Uploaded</span>}

                        {!uploadStatus && !error && (
                          <>
                            {uploading ? (
                              <span className="small d-flex align-items-center px-1"><Loader /></span>
                            ) : (
                              <button
                                className="btn btn-primary btn-small rounded-0"
                                onClick={uploadPhoto}
                                disabled={!image}
                              >
                                Upload
                              </button>
                            )}
                          </>
                        )}
                        {message && <span className="small text-danger m-0 p-0">{message}</span>}
                        <div className="text-center w-100 my-0 py-0 small d-flex justify-content-evenly">
                          {!uploadStatus && error && <span className="small text-danger">{error}</span>}
                          <small className="small m-0 p-0 text-center">Photo(Max. 100Kb)*</small></div>
                      </div>
                    </div>

                    <div className="col-md-6 my-2">
                      <label htmlFor="validationCustom01" className="form-label">2: Name of Student <span
                        className="text-body-secondary"> / छात्र का नाम</span>
                        <font color="red">*</font>
                      </label>
                      <div className="input-group mb-3"> <i className="bi bi-person-bounding-box input-group-text rounded-0 "></i>
                        <input type="text" className="form-control"
                          placeholder=" छात्र का नाम दर्ज करें*" value={name} onChange={(event) => { setName(event.target.value) }} required />
                      </div>
                    </div>
                    <div className="col-md-6 my-2">

                      <label htmlFor="validationCustom03  " className="form-label">3: Gender <span
                        className="text-body-secondary"> / लिंग</span>
                        <font color="red">*</font>
                      </label>
                      <div className="border d-flex align-items-center justify-content-evenly rounded-0 py-1 bg-light"
                        style={{ borderRadius: '10px' }}>
                        <div className="d-flex align-items-center "> <input
                          className="form-check-input  " type="radio" name="gender"
                          onChange={() => { setGender('male') }} required />
                          <label className="form-check-label rounded rounded-pill " >
                            &nbsp;
                            Male
                            <span className="text-body-secondary rounded rounded-pill">
                              /
                              पुरुष
                            </span>
                          </label>
                        </div>
                        |
                        <div className="d-flex align-items-center">
                          <input className="form-check-input" name='gender' type="radio" value={gender} onChange={() => { setGender('female') }}
                            required />
                          <label className="form-check-label  " >
                            &nbsp;
                            Female
                            <span className="text-body-secondary">
                              /
                              महिला</span>
                          </label>
                        </div>
                      </div>

                    </div>

                    <div className="col-md-6 my-2">
                      <label htmlFor="validationCustom03" className="form-label">4: Date Of Birth ( DOB )
                        <span className="text-body-secondary"> / जन्म तिथि</span>
                        <font color="red">*</font>
                      </label>
                      <div className="input-group mb-3"> <i className="bi bi-calendar-day-fill input-group-text rounded-0 "></i> <input
                        type="date" className="form-control" placeholder="DD/MM/YY" value={dob} onChange={(event) => { setDob(event.target.value) }} required />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-4">
                  <h5 className="text-primary fw-bolder">(B)Student Personal Details</h5>
                  <div className="row py-4 chocolateBorder bg-primary-subtle">
                    <div className="col-md-6">
                      <label htmlFor="validationCustom02" className="form-label">5: Father's Name <span
                        className="text-body-secondary">/ पिता का नाम</span>
                        <font color="red">*</font>
                      </label>
                      <div className="input-group mb-3"> <i className="bi bi-person-fill input-group-text rounded-0 "></i> <input
                        type="text" className="form-control"
                        placeholder=" पिता का नाम दर्ज करें" value={fatherName} onChange={(event) => { setFatherName(event.target.value) }} required />
                      </div>
                    </div>
                    <div className="col-md-6">

                      <label htmlFor="validationCustom02" className="form-label">6: Mother's Name <span
                        className="text-body-secondary">/ माता का नाम</span>
                        <font color="red">*</font>
                      </label>
                      <div className="input-group mb-3"> <i className="bi bi-person-fill input-group-text rounded-0 "></i> <input
                        type="text" className="form-control"
                        placeholder="माता का नाम  दर्ज करें" value={motherName} onChange={(event) => { setMotherName(event.target.value) }} required />
                      </div>

                    </div>

                    <div className="col-md-6">
                      <label htmlFor="validationCustom03" className="form-label">7: Mobile
                        <span className="text-body-secondary">/
                          मोबाइल</span>
                        <font color="red">
                          *
                        </font>
                      </label>
                      <div className="input-group mb-3">
                        <i className="bi bi-telephone-fill input-group-text rounded-0 "></i>
                        <input
                          type="text"
                          className="form-control rounded-0"
                          placeholder="मोबाइल नंबर दर्ज करें*"
                          value={mobileNumber}
                          onChange={(event) => {
                            if (/^\d+$/.test(event.target.value) && event.target.value.length <= 12 || event.target.value === "") {
                              setMobileNumber(event.target.value);
                            }
                          }}
                          required
                        />
                        <div className="text-center w-100 my-0 py-0 small d-flex justify-content-evenly">
                          <small className="small m-0 p-0 text-center">आधार से लिंक*</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="validationCustom05" className="form-label">8: Aadhaar No <span
                        className="text-body-secondary"> Aadhaar</span>
                        <font color="red">*</font>
                      </label>
                      <div className="input-group mb-3">
                        <i className="bi bi-list-ol input-group-text rounded-0 "></i>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="आधार नंबर दर्ज करें*"
                          onChange={(e) => { setAadhaar(e.target.value) }}
                          required
                        />

                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="validationCustom05" className="form-label">9: Email <span
                        className="text-body-secondary"> Email</span>
                        <font color="red">*</font>
                      </label>
                      <div className="input-group mb-3">
                        <i className="bi bi-list-ol input-group-text rounded-0 "></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email*"
                          onChange={(e) => { setEmail(e.target.value) }}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <h5 className="text-primary fw-bolder">(C) Basic Details</h5>
                  <div className="row py-4 chocolateBorder bg-primary-subtle">
                    <div className="col-md-6">
                      <label htmlFor="validationCustom05" className="form-label">10: Course <span
                        className="text-body-secondary">/ श्रेणी</span>
                        <font color="red">*</font>
                      </label>
                      <div className="input-group mb-3 ">
                        <i className="bi bi-book-half input-group-text"></i>
                        <select
                          className="form-select bg-light"
                          id="validationCustom04"
                          value={course}
                          onChange={(event) => { setCourse(event.target.value) }}

                          required
                        >
                          <option > ---All Course--- </option>
                          {
                            courseList[0] && courseList.map((value, key) => (
                              <option value={value} key={key}>{value}</option>
                            ))}
                        </select>

                        <div className="invalid-feedback"> Please select a valid state.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="validationCustom05" className="form-label">10: Category <span
                        className="text-body-secondary">/ श्रेणी</span>
                        <font color="red">* </font>
                      </label>
                      <div className="input-group mb-3"> <i className="bi bi-people-fill input-group-text rounded-0  "></i>
                        <select
                          className="form-select bg-light"
                          id="validationCustom05 rounded-0"
                          value={category}
                          required
                          onChange={(event) => { setCategory(event.target.value) }}
                        >
                          <option value="" disabled> --Select Category-- </option>
                          <option value="general"> GENERAL </option>
                          <option value="obc"> OBC </option>
                          <option value="sc"> SC </option>
                          <option value="st"> ST </option>
                          <option value="other"> OTHER </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="m-1">
                      <h5 className="text-primary fw-bolder">(D)Address Details</h5>
                      <div className="row py-3 chocolateBorder bg-primary-subtle ">
                        <label htmlFor="Adhar" className="form-label">11: Complete
                          Address
                          <span className="text-body-secondary">/पूरा पता</span>
                          <font color="red">*</font>
                        </label>
                        <div className="input-group mb-3 ">
                          <textarea type="text" rows={5} className="form-control rounded rounded-0" placeholder="पता दर्ज करें*" value={address} onChange={(event) => { setAddress(event.target.value) }} required ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12  px-1 py-3 my-4"
                style={{ background: AdmFooterBg, color: AdmFooterText }} id="declarationBg">
                <div className="form-check">
                  <div className="bg-success-subtle text-danger p-2 rounded rounded-pill d-inline">
                    <label className="form-check-label h5" htmlFor="invalidCheck">
                      <input
                        type="checkbox"
                        className="validCheck"
                        required
                        onChange={(e) => setCheckboxChecked(e.target.checked)}
                      />
                      <span className="icon"> </span>
                      <span style={{ fontSize: '1.2rem !important' }}>Declaration</span>
                      <span className="text-body-secondary"> / घोषणा </span>
                    </label>
                  </div>
                  <p className="my-2" id="declarationTextOne">
                    I declare here that all the information provided by me in this form is correct,
                    and all the entries filled in my online application form have been duly checked.
                    If any details mentioned in the online application form after official scrutiny are found to be erroneous/correct.
                    If the truth is found, then it will be my responsibility, if any action is taken against me by the department,
                    it will be acceptable to me.
                    I have no objection if I receive calls, e-mails and SMS for advertisement purpose by the institute.</p>
                  <p id="declarationTextTwo"> <small>
                    मैं यहां घोषणा करता हूं कि इस फॉर्म में मेरे द्वारा प्रदान की गई सभी जानकारी सही है ,
                    और मेरे ऑनलाइन आवेदन पत्र में भरी गयी समस्त प्रविष्टियां पूर्णतया जांच ली गयीं हैं.
                    यदि आधिकारिक जांचोपरांत ऑनलाइन आवेदन पत्र में अंकित कोई भी विवरण त्रुटिपूर्ण /
                    असत्य पाया जाता है तो उसका उत्तरदायित्व मेरा होगा,विभाग द्वारा मेरे विरुद्ध कोई भी कार्यवाही की जाती है तो वह मुझे मान्य होगी|
                    अगर मुझे संस्थान द्वारा विज्ञापन उद्देश्य के लिए कॉल, ई-मेल और एसएमएस प्राप्त होते हैं तो मुझे कोई आपत्ति नहीं है।
                  </small> </p>
                </div>
                <div className="col-12 ms-2">
                  {submit ? (
                    <button className="btn btn-succuss ms-3 border" id="checkBtn" type="button">
                      Submitted Successfully
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary ms-3 rounded rounded-pill p-0 m-0"
                      id="checkBtn"
                      type="button"
                      onClick={() => checkboxChecked && postForm()}
                      disabled={!submitEnabled}
                    >
                      <img src={submitBtn} alt="Submit" />
                    </button>
                  )}
                  <div className="text-danger d-inline px-1">{message && message.text}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ div >
      <Footer />
    </>
  )
})
export default AdmissionForm;


