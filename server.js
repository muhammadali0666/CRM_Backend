const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const authRegister  = require("./router/auth.router")
const studentRouter = require("./router/students.router")
const groupRouter = require("./router/group.router")
const {firebaseRouter} = require("./controller/firebase.ctr")
const paymentRouter  = require("./router/payment.router")
const teacherRouter = require("./router/teacher.router")
const deletedRouter = require("./router/deleted_students_router")

const app = express();

app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 4000;


app.use(express.json());

//////////////////// Router

app.use(authRegister)
app.use(studentRouter)
app.use(groupRouter)
app.use(firebaseRouter)
app.use(paymentRouter)
app.use(teacherRouter)
app.use(deletedRouter)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} the Port`);
})