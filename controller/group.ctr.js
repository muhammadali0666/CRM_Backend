const { Groups } = require("../model")

Groups.sync({ force: false })

const addGroup = async (req, res) => {
  try {
    const { GroupYonalish, DarsKunlari, DarsVaqti, Oqituvchi, OqituvchTelNomer, oqituvchiRasm } = req.body

    await Groups.create({ GroupYonalish, DarsKunlari, DarsVaqti, Oqituvchi, OqituvchTelNomer, oqituvchiRasm })

    return res.status(201).send({
      msg: "added group!"
    })
  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
}

const getGroups = async (req, res) => {
  try {
    const students = await Groups.findAll()
    return res.json(students)
  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
}


module.exports = {
  addGroup,
  getGroups
}