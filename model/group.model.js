const { sequelize, DataTypes} = require("../db/db.config")
const { UUIDV4 } = require("sequelize")

const Groups = sequelize.define("groups", {
  id: {
    type: DataTypes.TEXT,
    defaultValue: UUIDV4,
    primaryKey: true
  },

  GroupYonalish: {
    type: DataTypes.TEXT
  },
  DarsKunlari: {
    type: DataTypes.TEXT
  },
  DarsVaqti: {
    type: DataTypes.TEXT
  },
  Oqituvchi: {
    type: DataTypes.TEXT
  },
  OqituvchTelNomer: {
    type: DataTypes.TEXT
  },
  oquvchiSoni: {
    type: DataTypes.INTEGER
  },
  oqituvchiRasm: {
    type: DataTypes.TEXT
  },
})

module.exports = Groups;