const { Sequelize, DataTypes } = require("sequelize")
const dotenv = require("dotenv")

dotenv.config()
const sequelize = new Sequelize("postgres://default:rxpPGSMyY5F2@ep-gentle-violet-77044958.us-east-1.postgres.vercel-storage.com:5432/verceldb",{
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