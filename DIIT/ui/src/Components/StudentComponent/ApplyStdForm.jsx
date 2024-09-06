import React, { useEffect, useState } from 'react'
import { examFormList, getCourseList, verifyExamForm } from '../../api/adminApi/api';
import { toast } from 'react-toastify';
export default function ApplyStdForm() {
    const [formList, setFormList] = useState([]);
    const [examId, setExamId] = useState("");
    const [courses, setCourses] = useState("");
    const [course, setCourse] = useState();
    const [completed, setComplete] = useState();
    const [all, setAll] = useState(false);
    const getCoursesHandler = async () => {
        const rspns = await getCourseList();
        const allCourses = rspns.message;
        var coursesName = [];
        allCourses.forEach(course => {
            coursesName.push(course.name);
        });
        setCourses(coursesName);
    }
    const fetchExamFormHandler = async () => {
        if (all) {
            setComplete(null);
            setCourse(null);
        }
        const rspns = await examFormList(completed, course);
        setExamId(rspns.examId);
        setFormList(rspns.message);
    }
    const verifyExamFormHandler = async (exmId, frmId) => {
        try {
            const rspns = await verifyExamForm(exmId, frmId);
            toast.success(rspns.message);
        } catch (error) {
            throw error;
        }
    }
    useEffect(() => {
        fetchExamFormHandler();
    }, []);
    return (
        <>
            <div className="row m-0 p-0 pb-5">
                <div className="row d-flex text-center w-100 bg-primary py-1 m-auto px-0 mx-0">
                    <div className="col-12 mx-0 px-0">
                        <h1 className="text-center fw-bolder m-0 py-2 text-white">STUDENT'S FINAL EXAMIATION QUERIES</h1>
                    </div>
                    <div className="col-12 mx-0">
                        <div className="row">
                            <div className="col-md-4">
                                <select className='form-control m-1' onChange={(e) => { setAll(e.target.value) }}>
                                    <option className="form-select small" onClick={() => { setAll(false) }}>Not Selected</option>
                                    <option className="form-select small" value={true}>All</option>
                                </select>

                            </div>
                            <div className="col-md-4">
                                <select className='form-control m-1' onChange={(e) => { setComplete(e.target.value) }}>
                                    <option className="form-select small" onClick={() => { setComplete(null) }}>Exam Status</option>
                                    <option className="form-select small" value={true}>Completed</option>
                                    <option className="form-select small" value={false}>Uncompleted</option>
                                </select>

                            </div>
                            <div className="col-md-4">
                                <select className='form-control m-1' onClick={getCoursesHandler} onChange={(e) => { setCourse(e.target.value) }}>
                                    <option className="form-select small" onClick={() => { setCourse(null) }} >Select Course</option>
                                    {
                                        courses && courses.map((name) => {
                                            return (
                                                <option className="form-select small" value={name} >{name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-12">
                                <button className="btn my-2 btn-primary rounded-0" onClick={fetchExamFormHandler}><i className="bi bi-search"></i> Search</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-12 mb-5 mx-0 px-1">
                    <div className="table-responsive">
                        <table className="container m-auto table table-responsive table-sm small p-0 my-3 shadow">
                            <thead className='mx-0 px-0 diplomaTable'>
                                <tr className='table-dark small my-row-color smallText'>
                                    <th>Photo</th>
                                    <th>Reg No.</th>
                                    <th>Name</th>
                                    <th>Request Type</th>
                                    <th>Applied at</th>
                                    <th>Tested</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    formList && formList.map((stdnt) => {
                                        return (
                                            <tr key={stdnt.id} >
                                                <td className='m-0 p-0' ><img width="25px" src={stdnt.photo} alt="Loading..." /></td>
                                                <td className='m-0 p-0'>{stdnt.regNum}</td>
                                                <td className='m-0 p-0'>{stdnt.name}</td>
                                                <td className='m-0 p-0'>{stdnt.verified ? "Verified" : "Pending"}</td>
                                                <td className='m-0 p-0'>{new Date(stdnt.applyDate).toLocaleDateString()}</td>
                                                <td className='m-0 p-0'>{stdnt.tested ? "Tested" : "Not"}</td>

                                                <td className='small'><button className="btn btn-primary p-1 m-0 my-row-color small btn-sm" onClick={() => { verifyExamFormHandler(examId, stdnt.id) }}>Verify</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </>
    )
}
