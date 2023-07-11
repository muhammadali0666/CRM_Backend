const { Payment } = require("../model")

Payment.sync({ force: false })

const addPaymentor = async (req, res) => {
  try {
    const { oquvchiIsmi, yonalish, number, oqituvchiIsmi, tolovKuni } = req.body

    await Payment.create({ oquvchiIsmi, yonalish, number, oqituvchiIsmi, tolovKuni })

    return res.status(201).send({
      msg: "added payment!"
    })
  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
}

const getPaymentors = async (req, res) => {
  try {
    const payment = await Payment.findAll()
    return res.json(payment)
  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
}


module.exports = {
  addPaymentor,
  getPaymentors
}