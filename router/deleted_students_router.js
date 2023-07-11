const { Router } = require("express")
const { getDeleted } = require("../controller/deleted_students.ctr")

const deletedRouter = Router()

deletedRouter.get("/get_deleted", getDeleted)


module.exports = deletedRouter