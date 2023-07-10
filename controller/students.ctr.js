const { Students } = require("../model")

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


module.exports = {
  addStudent,
  getStudents,
  deleteStudent
}