const { Router } = require("express")
const { initializeApp } = require("firebase/app")
const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require("firebase/storage")
const multer = require("multer")
const firebaseConfig = require("../db/firebase.config")

const firebaseRouter = Router()

initializeApp(firebaseConfig.firebaseConfig)

const storage = getStorage()

const upload = multer({ storage: multer.memoryStorage() })

firebaseRouter.post("/upload", upload.single("filename"), async (req, res) => {
  try {

    const time = giveCurrentDateTime()

    const storageRef = ref(storage, `files/${req.file.originalname + "   " + time}`)

    const metaData = {
      contentType: req.file.mimetype
    }

    const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metaData)

    const downloadURL = await getDownloadURL(snapshot.ref)

    console.log("file uploaded successfully");
    return res.send({
      message: "file uploaded",
      downloadURL: downloadURL
    })

  }
  catch (err) {
    return res.send({
      msg: err.message
    })
  }
})

const giveCurrentDateTime = () => {
  const today = new Date()

  const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + (today.getHours())

  return date
}

module.exports = {
  firebaseRouter
}