import { toast } from "react-toastify";
import { postData } from "../../../../../api/tools/apiTools"
import { useState } from "react";
const baseUrl = "http://localhost:3000/admin";
export default function PushQuestionPaper(props) {
    const examId = props.examId;
    const [maxMarks, setMaxMarks] = useState(0);
    const [totalQuestions, seTotalQuestions] = useState(0);
    const pshPprHandler = async()=>{
        const token = localStorage.getItem('aToken');
        const rspns = await postData(baseUrl,"/pushQuestionPaper",{examId,maxMarks,totalQuestions},{'Authorization':token, 'Content-Type':"application/json"});
        if(rspns.ackbool==1){
            toast.success(rspns.message);
        }
    }
    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Fill Details</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                    <input type="number" placeholder="maximum mark" value={maxMarks} onChange={(e)=>{setMaxMarks(parseInt(e.target.value))}}/>
                    <input type="number" placeholder="Total questions" value={totalQuestions} onChange={(e)=>{seTotalQuestions(parseInt(e.target.value))}}/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={pshPprHandler}>Save </button>
                </div>
            </div>
        </div>
    )
}
