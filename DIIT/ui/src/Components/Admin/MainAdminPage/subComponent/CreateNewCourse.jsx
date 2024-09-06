import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { pushANewCourse } from '../../../../api/adminApi/api';

export default function CreateNewCourse() {
    const [courseTitle, setCourseTitle] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [prequisite, setPrerequisite] = useState('');
    const [subject, setSubject] = useState([]);
    const [contentTitle, setContentTitle] = useState('');
    const [error, setError] = useState('');
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const pushNewCourseHandler = async () => {
        const data = {
            name: courseTitle.toUpperCase(),
            description:courseDescription,
            duration: duration.toUpperCase(),
            subjects: subject,
            prequisite
        };
        try {
            const rspns = await pushANewCourse({ ...data });
            toast.success(rspns.message);
            resetForm();
        } catch (error) {
            toast.error('Failed to create course');
        }
    };

    const resetForm = () => {
        setCourseTitle('');
        setCourseDescription('');
        setDuration('');
        setPrerequisite('');
        setSubject([]);
        setContentTitle('');
        setError('');
    };

    const addCourseContent = () => {
        if (contentTitle.trim() !== '') {
            const lowercaseContentTitle = contentTitle.toLowerCase();
            if (!subject.some(content => content.name.toLowerCase() === lowercaseContentTitle)) {
                const newContent = {
                    name: contentTitle
                };
                setSubject(prevSubject => [...prevSubject, newContent]);
                setError('');
            } else {
                setError('Content already exists');
            }
            setContentTitle('');
        }
    };

    const handleContentInputChange = (e) => {
        // Clear error when user starts typing
        setError('');
        setContentTitle(e.target.value);
    };

    const removeContent = (index) => {
        setSubject(prevSubject => prevSubject.filter((_, i) => i !== index));
    };

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className='bg-white py-1 mb-5'>
            <div className="border bg-primary-subtle py-3 border-2 shadow-sm border-0 m-0">
                <div className='row'>
                    <div className="container-fluid col-10">
                        <h3 className='fw-bold'>Create a course</h3>
                        <div className="mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Course Name* "
                                onChange={(e) => setCourseTitle(e.target.value)}
                                value={courseTitle}
                            />
                        </div>
                        <div className="mb-2">
                            <textarea
                                className="form-control"
                                cols="30"
                                rows="5"
                                placeholder="Full name of the course*"
                                onChange={(e) => setCourseDescription(e.target.value)}
                                value={courseDescription}
                            ></textarea>
                        </div>
                        <div className="mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Duration ( Month & hrs. )*"
                                onChange={(e) => setDuration(e.target.value)}
                                value={duration}
                            />
                        </div>
                        <div className="mb-2">
                            <h6>Prerequisite</h6>
                            <textarea
                                className="form-control"
                                cols="30"
                                rows="3"
                                placeholder="Type here (Optional)"
                                onChange={(e) => setPrerequisite(e.target.value)}
                                value={prequisite}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="row m-auto d-flex justify-content-center">
                    <div className="col-10" id='ccc'>
                        {/* List all course contents */}
                        <h6 className="m-0 p-0">Course Contents:</h6>
                        <div className="mt-1 d-flex align-items-center">
                            <ul className='d-flex align-items-center list-unstyled p-0 m-0 flex-wrap'>
                                {subject.map((content, index) => (
                                    <li
                                        className='mx-3 '
                                        key={index}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {content.name}
                                        {hoveredIndex === index && (
                                            <button onClick={() => removeContent(index)} className="btn btn-danger btn-sm">
                                                <i className="fa fa-trash p-0 " aria-hidden="true"></i>
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="row mt-2 bg-white p-2 rounded rounded-2">
                            <div className="col-md-5 my-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter all course contents*'
                                    onChange={handleContentInputChange}
                                    value={contentTitle}
                                    required
                                />
                                {error && <p className="text-danger small">{error}</p>}
                            </div>
                            <div className="col-md-2 d-flex align-items-center">
                                <button className='btn btn-primary btn-sm px-3 ms-1 w-100' onClick={addCourseContent}>
                                    <i className="fa fa-plus-circle" aria-hidden="true"></i> &nbsp; Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <button className='btn btn-success d-flex align-items-center' onClick={pushNewCourseHandler}>
                    <i className="bi bi-cloud-arrow-up-fill fs-4"></i> &nbsp; Submit Course
                </button>
            </div>
        </div>
    );
}