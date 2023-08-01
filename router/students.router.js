const { Router } = require("express")
const {verifyToken} = require("../middleware/auth_middleware")
const { addStudent, getStudents, deleteStudent, search, allStudents, getFullInfoStudent } = require("../controller/students.ctr")

const studentRouter = Router()

studentRouter.post("/add_student", verifyToken, addStudent)
studentRouter.get("/get_students", verifyToken, getStudents)
studentRouter.delete("/student_remove/:id", verifyToken, deleteStudent)
studentRouter.get("/search_student", verifyToken, search)
studentRouter.get("/all_nowa_mont_students", verifyToken, allStudents)
studentRouter.get("/all_students_info_group/:id", verifyToken, getFullInfoStudent)

module.exports = studentRouter