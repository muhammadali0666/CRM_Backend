const { sequelize, DataTypes} = require("../db/db.config")
const { UUIDV4 } = require("sequelize")

const Students = sequelize.define("students", {
  id: {
    type: DataTypes.TEXT,
    defaultValue: UUIDV4,
    primaryKey: true
  },

  name: {
    type: DataTypes.TEXT
  },
  phoneNumber: {
    type: DataTypes.TEXT
  },
  science: {
    type: DataTypes.TEXT
  },
  parentName: {
    type: DataTypes.TEXT
  },
  parentNumber: {
    type: DataTypes.TEXT
  },
  picture: {
    type: DataTypes.TEXT
  },
})

module.exports = Students;