const { Payment } = require("../model")
const { Students } = require("../model")

Payment.sync({ force: false })

const addPaymentor = async (req, res) => {
  try {
    const { oquvchiIsmi, yonalish, number, oqituvchiIsmi, tolovKuni } = req.body

    if(!oquvchiIsmi || !yonalish || !number || !oqituvchiIsmi || !tolovKuni){
      return res.status(201).send({
        msg: "datas require!"
      })
    }

    await Payment.create({ oquvchiIsmi, yonalish, number, oqituvchiIsmi, tolovKuni })

    const changer = await Students.findAll({ where: { name: oquvchiIsmi } })

    const resultId = changer[0].id

    if (changer) {
      await Students.update(
        { pay: true },
        {
          returning: true,
          plain: false,
          where: {
            id: resultId
          },
        }
      );
    }

    // return res.send(changer.filter((e) => e));

    return res.status(201).send({
      data: changer.filter((e) => e),
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

const deletePaymentor = async (req, res) => {
  try {
    const { id } = req.params;

    await Payment.findOne({ where: { id: id } })


    await Payment.destroy({
      returning: true,
      plain: true,
      where: {
        id,
      },
    });
    return res.send({
      msg: "deleted paymentor!"
    });
  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
};


module.exports = {
  addPaymentor,
  getPaymentors,
  searchPayment,
  deletePaymentor
}