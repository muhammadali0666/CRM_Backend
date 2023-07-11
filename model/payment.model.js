const { sequelize, DataTypes} = require("../db/db.config")
const { UUIDV4 } = require("sequelize")

const Payment = sequelize.define("payment", {
  id: {
    type: DataTypes.TEXT,
    defaultValue: UUIDV4,
    primaryKey: true
  },

  oquvchiIsmi: {
    type: DataTypes.TEXT
  },
  yonalish: {
    type: DataTypes.TEXT
  },
  number: {
    type: DataTypes.TEXT
  },
  oqituvchiIsmi: {
    type: DataTypes.TEXT
  },
  tolovKuni: {
    type: DataTypes.TEXT
  },
})

module.exports = Payment;