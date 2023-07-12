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

const searchPayment = async (req, res) => {
  try {
    const { search } = req.headers;

    let searchToLowerCase = search.toLowerCase();

    let searchValidation = searchToLowerCase.trim();

    let objIsmsharif = await Payment.findAll({
      where: { oquvchiIsmi: searchValidation },
    });
    return res.status(201).send(objIsmsharif);
  } catch (err) {
    return res.send({ msg: err.message });
  }
};


module.exports = {
  addPaymentor,
  getPaymentors,
  searchPayment
}