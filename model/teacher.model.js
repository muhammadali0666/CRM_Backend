const { sequelize, DataTypes} = require("../db/db.config")
const { UUIDV4 } = require("sequelize")

const Teacher = sequelize.define("teacher", {
  id: {
    type: DataTypes.TEXT,
    defaultValue: UUIDV4,
    primaryKey: true
  },

  oqituvchiIsmi: {
    type: DataTypes.TEXT
  },
})

module.exports = Teacher;