const { sequelize, DataTypes } = require("../db/db.config")
const { UUIDV4 } = require("sequelize")

const Telegram = sequelize.define("telegram", {
  id: {
    type: DataTypes.TEXT,
    defaultValue: UUIDV4,
    primaryKey: true
  },

  firstName: {
    type: DataTypes.TEXT
  },
  userName: {
    type: DataTypes.TEXT
  },
  chatId: {
    type: DataTypes.INTEGER
  },
  text: {
    type: DataTypes.TEXT
  },
  date: {
    type: DataTypes.TEXT
  },
  time: {
    type: DataTypes.TEXT
  }
})

module.exports = Telegram;