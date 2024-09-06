import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { deleteCourse, getCourseList } from "../../../api/adminApi/api";

export default function CourseList() {
    const [courseList, setCourseList] = useState([]);
    const fetchCourse = async () => {
        const rspns = await getCourseList();
        rspns && setCourseList(rspns.message);
    }
    const deleteCourseHandler = async (_id) => {
        const rspns = await deleteCourse(_id);
        if (rspns.ackbool == 1) {
            toast.success(rspns.message)
            await fetchCourse();
        }

    }
    useEffect(() => {
        fetchCourse();
    }, [])
    return (
        <div className="w-100 table-responsive small py-1 my-1">
            <table className="table table-sm w-100 table-bordered border-primary-subtle table-responsive diplomaTable">
                <thead className="table table-dark table-sm my-row-color">
                    <tr>
                        <th>Course</th>
                        <th>Description</th>
                        <th>Content</th>
                        <th>Duration</th>
                        <th>Prerequisites</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody className="small">
                    {
                        courseList.length > 0 && courseList.map((course) => {
                            return (
                                <tr key={course._id}>
                                    <td>{course.name}</td>
                                    <td>{course.description}</td>
                                    <td>{course.subjects.map((subject) => {
                                        return (
                                            subject.name + `, `
                                        )
                                    })}</td>
                                    <td>{course.duration}</td>
                                    <td>{course.prerequisites}</td>
                                    <td onClick={() => { deleteCourseHandler(course._id) }}><button className="btn text-danger btn-sm"><i className="bi bi-trash"></i></button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
