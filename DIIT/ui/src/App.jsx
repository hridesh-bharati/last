import {
  Routes,
  Route,
} from "react-router-dom";
import { useState, Suspense, lazy } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/HomePage/Home";
import "./App.css";
import "./MediaQuery.css";
import { UniversalContext } from "./context/universal";
import { adminContext } from "./context/admin"
const Admin = lazy(() => import("./Components/Admin/MainAdminPage/Admin"));
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Branch from "./Components/Branch/Branch";
import AdmissionForm from "./Components/Admission/AdmissionForm";
import Verification from "./Components/Verification/Verification";
import FooterCorse from "./Components/Footer/FooterCourse";
import Contact from "./Components/Contact/Contact";
import Errors from "./Components/HomePage/Errors";

{/* ------------------Start Course---------------------- */ }
import AllCourses from "./Components/Course/AllCourses.jsx";

import ComputerLanguage from "./Components/Course/ComputerLanguage.jsx";

import Banking from "./Components/Course/Banking.jsx";
{/* ------------------End Course---------------------- */ }
import StudentChart from "./Components/Admin/Charts/Chart";
import OffersCard from "./Components/HomePage/OffersCard";
import ToastCard from "./Components/HomePage/Toast/ToastCard";
import DeleteNoticeComponent from "./Components/Admin/SendOffer/DeleteOffer";
import Title from "./Title";
import Description from "./Components/HomePage/Discription/Discription";
import PhotoGallery from "./Components/HomePage/PhotoGallary";
// ______________ Start Student Database   __________________
import StudentLogin from "./Components/StudentComponent/StudentLogin";
import StudentHomePage from "./Components/StudentComponent/StudentHomePage";
import FillFormStd from "./Components/StudentComponent/FillFormStd";
import IssueExamForm from "./Components/StudentComponent/IssueExamForm";
import ExamPortal from "./Components/StudentComponent/ExamPortal";
import Captcha from "./Components/Captcha/Captcha";
import Certificate from "./Components/Course/Certificate.jsx";
import Designing from "./Components/Course/Designing.jsx";
import Nielet from "./Components/Course/Nielet.jsx";
import CRepairing from "./Components/Course/CRepairing.jsx";
import WebDev from "./Components/Course/WebDev.jsx";
// ______________ End Student Database   ____________________

function App() {
  const [confermModal, setConfermModal] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);
  const [allStudent, setAllStudent] = useState([]);
  return (
    <>
      <UniversalContext.Provider value={{ confermModal, setConfermModal, adminLogin, setAdminLogin }}>
        <Title />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ------------------Start Course---------------------- */}
          <Route path="/AllCourses" element={<AllCourses />} />
          <Route path="/Certificate" element={<Certificate />} />
          <Route path="/ComputerLanguage" element={<ComputerLanguage />} />
          <Route path="/Designing" element={<Designing />} />

          <Route path="/Banking" element={<Banking />} />
          <Route path="/Nielet" element={<Nielet />} />
          <Route path="/CRepairing" element={<CRepairing />} />
          <Route path="/WebDev" element={<WebDev />} />





          <Route path="/about" element={<About />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/gallary" element={<PhotoGallery />} />
          <Route path="/admissionForm" element={<AdmissionForm />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offer" element={<OffersCard />} />
          <Route path="/ToastCard" element={<ToastCard />} />
          <Route path="/Description" element={<Description />} />
          {/* ______________ Start Student Database   __________________ */}
          <Route path="/StudentLogin" element={<StudentLogin />} />
          <Route path="/StudentHomePage" element={<StudentHomePage />} />
          <Route path="/FillFormStd" element={<FillFormStd />} />
          <Route path="/issueExamForm" element={<IssueExamForm />} />
          <Route path="/ExamPortal" element={<ExamPortal />} />
          <Route path="/Captcha" element={<Captcha />} />
          {/* ______________ End Student Database   ____________________ */}
          <Route exact path="*" Component={Errors} />
          <Route path="/admin" element={<adminContext.Provider value={{ setAllStudent, allStudent }}><Suspense fallback={<center className="MT-3 text-dark">Loading...</center>}><Admin /></Suspense></adminContext.Provider>} />
        </Routes>
        <ToastContainer />
      </UniversalContext.Provider>
      <FooterCorse />
    </>
  );
}
export default App;
