import { useState, useRef, useEffect } from "react";
import { getQuestions, pushQuestions } from "../../../../../api/adminApi/api";
import { toast } from "react-toastify";

export default function SendQuestions({ paperId }) {
  const questionRef = useRef(null);
  const saveBtnRef = useRef(null);
  const oldQuestionsBtnRef = useRef(null);
  let saveBtn;
  let options;
  let oldQuestionsBtn;
  const [questions, setQuestions] = useState([]);
  const [oldQuestions, setOldQuestions] = useState([]);
  const [question, setQuestion] = useState({
    question: "",
    options: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    answer: ""
  });

  const setQuestionHandler = (e) => {
    const { name, value } = e.target;

    setQuestion((prevQuestion) => {
      const updatedQuestion = { ...prevQuestion };

      if (name === 'question' || name === 'answer') {
        updatedQuestion[name] = value;
      } else {
        updatedQuestion.options = {
          ...prevQuestion.options,
          [name]: value,
        };
      }

      return updatedQuestion;
    });
  };


  const cleanUpForm = () => {
    setQuestion({
      question: "",
      options: {
        a: "",
        b: "",
        c: "",
        d: "",
      },
      answer: ""
    });
    options.forEach((input) => {
      input.value = '';
    });
  };

  const setQuestionsHandler = () => {
    const { answer, options } = question
    if (!answer || !options) {
      toast.error("fill all details");
      return;
    }
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      question
    ]);
    cleanUpForm();
  };

  const pushQuestionsHandler = async () => {
    try {
      const data = {
        qPId: paperId,
        questions: questions
      };
      const rspns = await pushQuestions(data);
      if (rspns.ackbool === 1) {
        toast.success(rspns.message);
        setQuestions([]); // Clear questions state
        fetchQuestionsHandler(); // Fetch updated questions
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchQuestionsHandler = async () => {
    try {
      const rspns = await getQuestions(paperId);
      if (rspns.ackbool === 1) {
        setOldQuestions(rspns.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    oldQuestionsBtn = oldQuestionsBtnRef.current;
    options = (questionRef.current).querySelectorAll('input');
    saveBtn = saveBtnRef.current;

    options.forEach(input => {
      input.addEventListener('change', setQuestionHandler);
    });
    saveBtn.addEventListener('click', pushQuestionsHandler);
    oldQuestionsBtn.addEventListener('click', fetchQuestionsHandler);

    // Clean-up function to avoid memory leaks
    return () => {
      options.forEach((input) => {
        input.removeEventListener('change', setQuestionHandler);
      });
      saveBtn.removeEventListener('click', pushQuestionsHandler);
      oldQuestionsBtn.removeEventListener('click', fetchQuestionsHandler);
    };
  }, [paperId, questions]);

  return (
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header bg-dark text-light">
          <h5 className="modal-title" id="exampleModalLongTitle">Question Paper</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body bg-primary-subtle">
          <div>
            <h3 ref={oldQuestionsBtnRef}>
              <button className="btn btn-primary btn-sm small">
                <bi className="bi bi-eye fs-5"></bi> View
              </button> {oldQuestions && oldQuestions.length} Old Questions
            </h3>
            {
              oldQuestions && oldQuestions.map((q, index) => (
                <div className="questionDtls border-bottom" key={q._id}>
                  <b className="question"><i>Que.{(index + 1)}</i> {(q.question).toUpperCase()}</b> &nbsp;
                  <span><u><b>Answer</b></u> {q.answer}</span> <br />
                  <ol style={{ listStyle: 'lower-alpha' }}>
                    <li>{q.options.a}</li>
                    <li>{q.options.b}</li>
                    <li>{q.options.c}</li>
                    <li>{q.options.d}</li>
                  </ol>
                </div>
              ))
            }
          </div>
          <div className="showQuestions border-top border-light">
            <h3>New Questions</h3>
            {
              questions && questions.map((q, index) => (
                <div className="QuestionDls" key={index}>
                  <b className="question"><i>Que. {oldQuestions.length + (index + 1)}</i> {(q.question).toUpperCase()}</b> &nbsp;
                  <span><u><b>Answer</b></u> {q.answer}</span> <br />
                  <ol style={{ listStyle: 'lower-alpha' }}>
                    <li>{q.options.a}</li>
                    <li>{q.options.b}</li>
                    <li>{q.options.c}</li>
                    <li>{q.options.d}</li>
                  </ol>
                </div>
              ))
            }
          </div>
          <div ref={questionRef} className="p-3">
            <input className="form-control my-2" type="text" name="question" placeholder="Enter Question" />
            <input className="form-control my-2" type="text" name="a" placeholder="Option a" />
            <input className="form-control my-2" type="text" name="b" placeholder="Option b" />
            <input className="form-control my-2" type="text" name="c" placeholder="Option c" />
            <input className="form-control my-2" type="text" name="d" placeholder="Option d" />
            <input className="form-control my-2" type="text" name="answer" placeholder="Enter Which is answer option" />
          </div>
          <button type="button" className="btn btn-sm btn-primary" onClick={setQuestionsHandler}>Next</button>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-sm btn-primary" ref={saveBtnRef}>Save</button>
        </div>
      </div>
    </div>
  );
}
