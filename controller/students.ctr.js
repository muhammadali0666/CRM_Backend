const { Students } = require("../model")
const { Deletedstudents } = require("../model")
const { Groups } = require("../model")

Students.sync({ force: false })

const addStudent = async (req, res) => {
  try {
    const { name, phoneNumber, science, parentName, parentNumber, picture } = req.body

    await Students.create({ name, phoneNumber, science, parentName, parentNumber, picture })

    return res.status(201).send({
      msg: "added student!"
    })
  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
}

const getStudents = async (req, res) => {
  try {
    const students = await Students.findAll()
    return res.json(students)
  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
}

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const finder = await Students.findOne({ where: { id: id } })

    await Deletedstudents.create({ name: finder.name, phoneNumber: finder.phoneNumber, science: finder.science, parentName: finder.parentName, parentNumber: finder.parentNumber, picture: finder.picture })


    await Students.destroy({
      returning: true,
      plain: true,
      where: {
        id,
      },
    });
    return res.send("deleted student!");
  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
};

const search = async (req, res) => {
  try {
    const { search } = req.headers;

    let searchToLowerCase = search.toLowerCase();

    let searchValidation = searchToLowerCase.trim();

    let objIsmsharif = await Students.findAll({
      where: { name: searchValidation },
    });
    return res.status(201).send(objIsmsharif);
  } catch (err) {
    return res.send({ msg: err.message });
  }
};

const allStudents = async (req, res) => {
  try {
    const students = await Students.findOne({ where: {} })
    return res.json(students)
  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
}

const getFullInfoStudent = async (req, res) => {
  try {
    const { id } = req.params

    const result = await Groups.findOne({ where: { id: id } })
    const student = await Students.findAll({ where: { science: result.GroupYonalish } });
    return res.json(student)
  }
  catch (err) {
    return res.status(400).send({
      msg: err.message
    })
  }
}


module.exports = {
  addStudent,
  getStudents,
  deleteStudent,
  search,
  allStudents,
  getFullInfoStudent
}