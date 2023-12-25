const Users = require("./auth_model")
const Students = require("./students.model")
const Groups = require("./group.model")
const Payment = require("./payment.model")
const Teacher = require("./teacher.model")
const Deletedstudents = require("./deleted_students_model")
const Telegram = require("./telegram_model")

module.exports = {
    Users,
    Students,
    Groups,
    Payment,
    Teacher,
    Deletedstudents,
    Telegram
}