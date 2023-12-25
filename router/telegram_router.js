const { Router } = require("express")
const {verifyToken} = require("../middleware/auth_middleware")
const { deleteTelegramUser, getMessage, getMessageByDay } = require("../controller/telegram_bot")

const deletedTelegramRouter = Router()

deletedTelegramRouter.delete("/delete_telegram_message/:id", verifyToken, deleteTelegramUser)
deletedTelegramRouter.get("/get_telegram_message", verifyToken, getMessage)
deletedTelegramRouter.get("/get_telegram_message_by_day", verifyToken, getMessageByDay)

module.exports = deletedTelegramRouter