const { Router } = require("express")
const { addPaymentor, getPaymentors } = require("../controller/payment.ctr")

const paymentRouter = Router()

paymentRouter.post("/add_paymentor", addPaymentor)
paymentRouter.get("/get_paymentors", getPaymentors)


module.exports = paymentRouter