const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send("LEARN | ONLINE BACKEND .");
})

app.listen(port, () => {
  console.log("index.js running")
})