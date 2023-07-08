const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const authRegister  = require("./router/auth.router")
const studentRouter = require("./router/students.router")

const app = express();

app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 4000;


app.use(express.json());

//////////////////// Router

app.use(authRegister)
app.use(studentRouter)




app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} the Port`);
})