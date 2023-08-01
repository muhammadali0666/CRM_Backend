const { Router } = require("express")
const {verifyToken} = require("../middleware/auth_middleware")
const { addGroup, getGroups, searchGroup, getFullInfoGroup } = require("../controller/group.ctr")

const groupRouter = Router()

groupRouter.post("/add_group", verifyToken, addGroup)
groupRouter.get("/get_groups", verifyToken, getGroups)
groupRouter.get("/search_groups", verifyToken, searchGroup)
groupRouter.get("/get_full_info_group/:id", verifyToken, getFullInfoGroup)


module.exports = groupRouter