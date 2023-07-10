const { Router } = require("express")
const { addStudent, getStudents, deleteStudent } = require("../controller/students.ctr")

const studentRouter = Router()

studentRouter.post("/add_student", addStudent)
studentRouter.get("/get_students", getStudents)
studentRouter.delete("/student_remove/:id", deleteStudent)


module.exports = studentRouter