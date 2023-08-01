const { Router } = require("express")
const { authRegister, authLogin } = require("../controller/auth.ctr")
const {userValidate} = require("../middleware/validation.middleware")

const authRouter = Router()

authRouter.post("/register", userValidate, authRegister)
authRouter.post("/login", authLogin)
// authRouter.post("/adminLogin", authAdminLogin)


module.exports = authRouter