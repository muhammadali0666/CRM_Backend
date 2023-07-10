const { Router } = require("express")
const { addGroup, getGroups } = require("../controller/group.ctr")

const groupRouter = Router()

groupRouter.post("/add_group", addGroup)
groupRouter.get("/get_groups", getGroups)


module.exports = groupRouter