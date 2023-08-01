const { sequelize, DataTypes} = require("../db/db.config")
const { UUIDV4 } = require("sequelize")

const Users = sequelize.define("auth", {
  id: {
    type: DataTypes.TEXT,
    defaultValue: UUIDV4,
    primaryKey: true
  },

  username: {
    type: DataTypes.TEXT
  },
  email: {
    type: DataTypes.TEXT
  },
  password: {
    type: DataTypes.TEXT
  },
  role: {
    type: DataTypes.TEXT,
    defaultValue: 'user'
  },
  token: {
    type: DataTypes.TEXT
  },
})

module.exports = Users;