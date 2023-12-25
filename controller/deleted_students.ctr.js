const { Deletedstudents } = require("../model")

Deletedstudents.sync({ force: false })

const getDeleted = async (req, res) => {
  try {
    const deleted = await Deletedstudents.findAll()
    return res.send(deleted)
  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
}

const deleteRemovingStudent = async (req, res) => {
  try {
    const { id } = req.params;

    await Deletedstudents.findOne({ where: { id: id } })


    await Deletedstudents.destroy({
      returning: true,
      plain: true,
      where: {
        id,
      },
    });
    return res.send({
      msg: "deleted student!"
    });
  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
};


module.exports = {
  getDeleted,
  deleteRemovingStudent
}