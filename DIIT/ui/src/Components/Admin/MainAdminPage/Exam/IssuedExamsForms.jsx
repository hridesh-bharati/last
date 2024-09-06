import { toast, useToast } from "react-toastify";
import { getAllExams } from "../../../../api/adminApi/api";
import { lockExamForm } from "../../../../api/adminApi/api";
import PushQuestionPaper from "./questionPaper/PushQuestionPaper";
import SendQuestions from "./questionPaper/SendQuestions";
import { useEffect, useState } from "react";
export default function ExamForms() {
  const [exams, setExams] = useState({});
  const [completed, setCompleted] = useState(false);
  const [locked, setLocked] = useState(false);
  const [action, setAction] = useState(true);
  const [examId, setExamId] = useState("");
  const [qPId, setQpId] = useState("");
  const fetchAllExamHandler = async () => {
    const rspns = await getAllExams(completed, locked);
    setExams(rspns.message);
    toast.success(rspns.message);
  }
  const setLockExamFormHandler = async () => {
    const rspns = await lockExamForm(examIds, action);
    toast.success(rspns.message);
  }
  useEffect(() => {
    fetchAllExamHandler();
  }, []);
  return (
    <div className="bg-white p-4 mb-4 mx-0 px-0">
      <div className="">
        <div
          className="table-responsive"
        >
          <div className="modal fade bd-example-modal-sm" tabindex="1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <PushQuestionPaper />
          </div>
          <button className="btn btn-primary btn-sm m-1" onClick={fetchAllExamHandler}><i class="bi bi-arrow-clockwise"></i> Reload</button>
          <table
            className="table table-primary table-sm small diplomaTable "
          >
            <thead className="table table-dark my-row-color text-center">
              <tr >
                <th className="mx-0 px-0">Course</th>
                <th className="mx-0 px-0">Exam Date</th>
                <th className="mx-0 px-0">Duration</th>
                <th className="mx-0 px-0">Locked</th>
                <th className="mx-0 px-0">Completed</th>
                <th className="mx-0 px-0" >Students</th>
                <th className="mx-0 px-0" >Question Paper</th>
              </tr>
            </thead>
            <tbody className="my-row-color text-center">
              {exams[0] && exams.map((e) => {
                return (
                  <tr id={e._id}>
                    <td>{e.courseName}</td>
                    <td>{new Date(e.examDate).toLocaleDateString()}</td>
                    <td>{e.duration}</td>
                    <td>{(e.locked) ? 'true' : 'false'}</td>
                    <td>{(e.completed) ? 'true' : 'false'}</td>
                    <td>{e.students.length}</td>
                    <td>{(e.paper) ?
                      <button type="button" className="btn btn-primary btn-sm small" data-bs-toggle="modal" data-bs-target="#sendqstModel" onClick={() => { setQpId(e.paper) }} >
                        Upload Questions
                      </button>
                      : <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setExamId(e._id) }} >
                        Set Paper
                      </button>
                    }</td>
                  </tr>
                )
              })}
              <div className="modal fade  modal-fullScreen" id="sendqstModel" tabindex="1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <SendQuestions paperId={qPId} />
              </div>
              <div className="modal fade" id="exampleModal" tabindex="1" >
                <PushQuestionPaper examId={examId} />
              </div>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
