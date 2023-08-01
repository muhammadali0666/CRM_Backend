const { Router } = require("express")
const { addPaymentor, getPaymentors, searchPayment } = require("../controller/payment.ctr")
const { verifyToken } = require("../middleware/auth_middleware")

const paymentRouter = Router()

paymentRouter.post("/add_paymentor", verifyToken, addPaymentor)
paymentRouter.get("/get_paymentors", verifyToken, getPaymentors)
paymentRouter.get("/search_paymentors", verifyToken, searchPayment)


module.exports = paymentRouter