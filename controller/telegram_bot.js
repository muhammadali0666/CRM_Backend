const { Telegram } = require("../model");

Telegram.sync({ force: false });

//////////////////// TELEGRAM BOT
const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
bot.on("text", async (ctx) => {
  let timestamp = ctx.date;
  let date = new Date(timestamp * 1000); // Unix vaqti milisaniyada hisoblanadi, shuning uchun 1000 ga ko'paytiramiz

  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  let hours = ("0" + date.getHours()).slice(-2);
  let minutes = ("0" + date.getMinutes()).slice(-2);

  let formattedDate = day + "." + month + "." + year;

  let formattedTime = hours + ":" + minutes;

  await Telegram.create({
    firstName: ctx?.from?.first_name,
    userName: ctx?.from?.username || "without username",
    text: ctx?.text,
    date: formattedDate,
    time: formattedTime,
  });
});

const getMessage = async (req, res) => {
  try {
    const message = await Telegram.findAll();

    return res.json(message);
  } catch (err) {
    return res.send({
      msg: err.message,
    });
  }
};

const getMessageByDay = async (req, res) => {
  try {
    const message = await Telegram.findAll();

    let getDate = message.map((time) => time.dataValues.date)

    let currentDate = new Date()

  let convertedMonth = Number(currentDate.getMonth()) + 1

   let currentDateWithClass = currentDate.getDate() + "." + convertedMonth + "." + currentDate.getFullYear()

  let finish = getDate.filter((check) => {
    return check === currentDateWithClass
  } )
  if(finish) {
    return res.json(message);
  }else{
    return res.json(message)
  }

  } catch (err) {
    return res.send({
      msg: err.message,
    });
  }
};

const deleteTelegramUser = async (req, res) => {
  try {
    const { id } = req.params;

    await Telegram.findOne({ where: { id: id } });

    await Telegram.destroy({
      returning: true,
      plain: true,
      where: {
        id,
      },
    });
    return res.send({
      msg: "delete user message!",
    });
  } catch (err) {
    return res.send({
      msg: err.message,
    });
  }
};

module.exports = bot;

module.exports = {
  deleteTelegramUser,
  getMessage,
  getMessageByDay,
};
