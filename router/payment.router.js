const { Router } = require("express")
const { addPaymentor, getPaymentors, searchPayment } = require("../controller/payment.ctr")

const paymentRouter = Router()

paymentRouter.post("/add_paymentor", addPaymentor)
paymentRouter.get("/get_paymentors", getPaymentors)
paymentRouter.get("/search_paymentors", searchPayment)


module.exports = paymentRouter