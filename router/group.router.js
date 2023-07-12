const { Router } = require("express")
const { addGroup, getGroups, searchGroup, getFullInfoGroup } = require("../controller/group.ctr")

const groupRouter = Router()

groupRouter.post("/add_group", addGroup)
groupRouter.get("/get_groups", getGroups)
groupRouter.get("/search_groups", searchGroup)
groupRouter.get("/get_full_info_group/:id", getFullInfoGroup)


module.exports = groupRouter