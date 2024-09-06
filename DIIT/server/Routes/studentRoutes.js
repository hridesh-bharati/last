const router = require("express").Router();
const {
  studentRegistration,
  sendQuery,
  loginController,
  getProfile,
  getExams,
  fillExamForm,
  startExam,
  submitAnswer
} = require("../Controller/studentController");
const requireStudentLogin = require("../Middleware/requireStudentLogin");
router.post("/studentRegistration", studentRegistration);
router.post("/queryNow", sendQuery);
router.post("/login", loginController);
router.get("/getProfile",requireStudentLogin,getProfile);
router.post("/getExams", requireStudentLogin, getExams);
router.post("/fillExamForm", requireStudentLogin, fillExamForm);
router.post("/startExam", requireStudentLogin, startExam);
router.post("/submitAnswer",requireStudentLogin,submitAnswer);
module.exports = router;
