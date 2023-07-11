const { Teacher } = require("../model")

Teacher.sync({ force: false })

const addTeacher = async (req, res) => {
  try {
    const { oqituvchiIsmi } = req.body

    await Teacher.create({ oqituvchiIsmi })

    return res.status(201).send({
      msg: "added teacher!"
    })
  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
}


const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll()
    return res.json(teachers)
  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
}

module.exports = {
  getTeachers,
  addTeacher
}