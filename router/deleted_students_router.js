const { Router } = require("express")
const {verifyToken} = require("../middleware/auth_middleware")
const { getDeleted, deleteRemovingStudent } = require("../controller/deleted_students.ctr")

const deletedRouter = Router()

deletedRouter.get("/get_deleted", verifyToken, getDeleted)
deletedRouter.delete("/delete_removing_students/:id", verifyToken, deleteRemovingStudent)


module.exports = deletedRouter