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


module.exports = {
  getDeleted
}