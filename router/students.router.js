const { Router } = require("express")
const { addStudent } = require("../controller/students.ctr")
const {getStudents} = require("../controller/students.ctr")

const studentRouter = Router()

studentRouter.post("/add_student", addStudent)
studentRouter.get("/get_students", getStudents)


module.exports = studentRouter