const { Router } = require("express")
const { addStudent, getStudents, deleteStudent, search, allStudents, getFullInfoStudent } = require("../controller/students.ctr")

const studentRouter = Router()

studentRouter.post("/add_student", addStudent)
studentRouter.get("/get_students", getStudents)
studentRouter.delete("/student_remove/:id", deleteStudent)
studentRouter.get("/search_student", search)
studentRouter.get("/all_nowa_mont_students", allStudents)
studentRouter.get("/all_students_info_group/:id", getFullInfoStudent)

module.exports = studentRouter