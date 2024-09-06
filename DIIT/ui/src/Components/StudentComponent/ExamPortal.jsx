import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { submitAnswer } from '../../api/studentApi/api'; // Adjusted import path
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import Greating from './Greeting';
const ExamPortal = () => {
  const questions = useSelector(state => state.exmQstns.questions);
  const examId = useSelector(state => state.exmQstns.examId);
  const [answers, setAnswers] = useState([]);

  // Update the answer for a specific question
  const handleOptionChange = (questionId, optionKey) => {
    setAnswers(prevAnswers => {
      const existingAnswerIndex = prevAnswers.findIndex(answer => answer._id === questionId);

      if (existingAnswerIndex > -1) {
        // Update existing answer
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex] = { _id: questionId, rsAns: optionKey };
        return updatedAnswers;
      } else {
        // Add new answer
        return [...prevAnswers, { _id: questionId, rsAns: optionKey }];
      }
    });
  };

  // Validate if all questions have been answered
  const validateAnswers = () => {
    const answeredQuestionIds = answers.map(answer => answer._id);
    const allQuestionIds = questions.map(q => q._id);

    return allQuestionIds.every(questionId => answeredQuestionIds.includes(questionId));
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateAnswers()) {
      toast.error('Please answer all questions before submitting.');
      return;
    }

    console.log('Selected Answers:', answers);

    try {
      const rspns = await submitAnswer(examId, answers);
      toast.success('Answers submitted successfully!');
      // Handle the response here (e.g., show success message or handle errors)
      console.log(rspns);
    } catch (error) {
      toast.error('Submission failed. Please try again.');
      console.error('Submission failed:', error);
    }
  };
  // ---------------------- Start Lock Exam Forms -----------------------
  const [isVisible, setIsVisible] = useState(false);
  const [seconds, setSeconds] = useState(7200);
  const [by, setBy] = useState(true);

  useEffect(() => {
    if (seconds <= 0) {
      setIsVisible(true);
      setBy(false);
      return;
    }
    const timer = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  // Format seconds into hours, minutes, and seconds
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  const { hours, minutes, seconds: displaySeconds } = formatTime(seconds);

  // ---------------------- End Lock Exam Forms -----------------------
  return (
    <div className="container my-4 p-4 myshadow2">
      <div className="row">
        <div className="col-12 d-flex justify-content-between">
          <h2 className="text-center">Hello User</h2>
          <p className="time">  {hours}:{minutes}:{displaySeconds}</p>
        </div>
      </div>
      {
        !isVisible &&
        <>
          {!questions || questions.length === 0 ? (
            <p className="text-center">No questions available</p>
          ) : (
            questions.map(q => (
              <div key={q._id} className="card mb-3 border-buttom ">
                <div className="card-body">
                  <h5 className="card-title">{q.question}</h5>
                  <div className="form-group bg-info-subtle px-2">
                    {Object.entries(q.options).map(([key, option]) => (
                      <div className="form-check border-bottom border-white py-1" key={key}>
                        <input
                          type="radio"
                          className="form-check-input"
                          id={`${q._id}-${key}`}
                          name={q._id}
                          value={key}
                          checked={answers.find(answer => answer._id === q._id)?.rsAns === key}
                          onChange={() => handleOptionChange(q._id, key)}
                        />
                        <label className="form-check-label w-100" htmlFor={`${q._id}-${key}`}>
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
          <button
            className="btn btn-primary btn-lg w-100 mt-3"
            onClick={handleSubmit}
          >
            Submit Answers
          </button>
        </>
      }
      {!by && <>
        <Greating />
      </>
      }
      <ToastContainer />
    </div>
  );
};

export default ExamPortal;
