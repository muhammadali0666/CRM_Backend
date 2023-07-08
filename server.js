const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const authRegister  = require("./router/auth.router")

const app = express();

app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 4000;


app.use(express.json());




app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} the Port`);
})