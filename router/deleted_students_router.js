const { Router } = require("express")
const {verifyToken} = require("../middleware/auth_middleware")
const { getDeleted } = require("../controller/deleted_students.ctr")

const deletedRouter = Router()

deletedRouter.get("/get_deleted", verifyToken, getDeleted)


module.exports = deletedRouter