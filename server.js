const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
// const nodemailer = require('nodemailer');
const authRegister = require("./router/auth.router");
const studentRouter = require("./router/students.router");
const groupRouter = require("./router/group.router");
// const { firebaseRouter } = require("./controller/firebase.ctr")
const paymentRouter = require("./router/payment.router");
const teacherRouter = require("./router/teacher.router");
const deletedRouter = require("./router/deleted_students_router");
const deletedTelegramRouter = require("./router/telegram_router")
//////////////////////////// for telegram bot
const bodyParser = require("body-parser");
require("./controller/telegram_bot");

const app = express();

app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 4000;

/////////////////////////// bodyParser for telegram bot
app.use(bodyParser.json());

app.use(express.json());

//////////////////// Router

app.use(authRegister);
app.use(studentRouter);
app.use(groupRouter);
// app.use(firebaseRouter)
app.use(paymentRouter);
app.use(teacherRouter);
app.use(deletedRouter);
app.use(deletedTelegramRouter)
/////////////////////////

// app.get('/a', (req, res) => {

//   let val = Math.random() * 100000

//    const confirmationCode = val.toString().split('').splice(0,5).join('')-0

//  return res.status(200).send("a")
// })

// app.post('/send_gmail', (req, res) => {
//   const { email } = req.body

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL,
//       pass: 'gmlmvvatzkuedfqe'
//     }
//   });

//   let val = Math.random() * 100000

//   const confirmationCode = val.toString().split('').splice(0,5).join('')-0

//   const mailOptions = {
//     from: process.env.EMAIL,
//     to: `${email}`,
//     subject: 'Your confirmation code:',
//     html: `<b>confirmation code: ${confirmationCode}</b>`
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   })
//   res.send({
//     msg: 'Success!'
//   })
// })

//////////////////////////

app.listen(PORT, () => {
  console.log(`Server is running on the ${PORT} Port`);
});
