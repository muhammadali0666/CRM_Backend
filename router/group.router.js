const { Router } = require("express")
const { addGroup, getGroups, searchGroup } = require("../controller/group.ctr")

const groupRouter = Router()

groupRouter.post("/add_group", addGroup)
groupRouter.get("/get_groups", getGroups)
groupRouter.get("/search_groups", searchGroup)


module.exports = groupRouter