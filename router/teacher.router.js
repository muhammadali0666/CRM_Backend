const { Router } = require("express")
const { getTeachers, addTeacher } = require("../controller/teacher.ctr")

const teacherRouter = Router()

teacherRouter.get("/get_teacher", getTeachers)
teacherRouter.post("/add_teacher", addTeacher)


module.exports = teacherRouter