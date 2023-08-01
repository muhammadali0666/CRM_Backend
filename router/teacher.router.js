const { Router } = require("express")
const { getTeachers, addTeacher } = require("../controller/teacher.ctr")
const { verifyToken } = require("../middleware/auth_middleware")

const teacherRouter = Router()

teacherRouter.get("/get_teacher", verifyToken, getTeachers)
teacherRouter.post("/add_teacher", verifyToken, addTeacher)


module.exports = teacherRouter