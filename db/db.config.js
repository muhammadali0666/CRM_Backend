const { Sequelize, DataTypes } = require("sequelize")
const dotenv = require("dotenv")

dotenv.config()
const sequelize = new Sequelize("postgres://sdkflopp:FyrhQRIVFX9Fs1hsLg6IifEH4BzCyQL_@floppy.db.elephantsql.com/sdkflopp",{
    logging: false
})

sequelize
      .authenticate()
      .then(() => console.log('Connected'))
      .catch((err) => console.log(err))  



module.exports = {
    sequelize,
    DataTypes
}