const dotenv = require("dotenv")

dotenv.config()

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGEINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MESUREMENTID
};

module.exports = {
  firebaseConfig
}