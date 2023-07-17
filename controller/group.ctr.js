const { Groups } = require("../model")
const { Teacher } = require("../model")
const { Students } = require("../model")

Groups.sync({ force: false })

const addGroup = async (req, res) => {
  try {
    const { GroupYonalish, DarsKunlari, DarsVaqti, Oqituvchi, OqituvchTelNomer, oqituvchiRasm } = req.body

    const teachers = await Teacher.findOne({ where: { oqituvchiIsmi: Oqituvchi } })

    if (!teachers) {
      await Groups.create({ GroupYonalish, DarsKunlari, DarsVaqti, Oqituvchi, OqituvchTelNomer, oqituvchiRasm })
        && await Teacher.create({ oqituvchiIsmi: Oqituvchi })
    } else {
      await Groups.create({ GroupYonalish, DarsKunlari, DarsVaqti, Oqituvchi, OqituvchTelNomer, oqituvchiRasm })
    }

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
    // const students = await Students.findOne({where: {science}})
    const groups = await Groups.findAll()
    return res.json(groups)
  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
}

const searchGroup = async (req, res) => {
  try {
    const { search } = req.headers;

    let searchToLowerCase = search.toLowerCase();

    let searchValidation = searchToLowerCase.trim();

    let objIsmsharif = await Groups.findAll({
      where: { GroupYonalish: searchValidation },
    });
    return res.status(201).send(objIsmsharif);
  } catch (err) {
    return res.send({ msg: err.message });
  }
};

const getFullInfoGroup = async (req, res) => {
  try {
    const { id } = req.params
    let group = await Groups.findAll({ where: { id: id } });
    return res.json(group)
  }
  catch (err) {
    return res.status(400).send({
      msg: err.message
    })
  }
}




module.exports = {
  addGroup,
  getGroups,
  searchGroup,
  getFullInfoGroup
}