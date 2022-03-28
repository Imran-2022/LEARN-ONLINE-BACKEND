const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const ObjectId = require('mongodb').ObjectId;
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()
const port = process.env.PORT || 8080;

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
console.log("first",DB_USER,DB_PASSWORD)
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jufnc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    await client.connect();
    console.log("connected to database");
    const database = client.db("learn-online-database");
    const collection = database.collection("learn-online-collection1");

    //   get api

    app.get("/data", async (req, res) => {
      const query = {}
      const dataa = collection.find(query)
      const data = await dataa.toArray();
      // res.send(data.reverse())
      res.send(data)

    })




    //   post api 


    app.post("/data", async (req, res) => {
    console.log(req.body)
    const bodyData=req.body;
      const result = await collection.insertOne(bodyData);
      console.log(result.insertedId);
      res.send(result.insertedId)

    })
    //   update api





  } finally {
    //   await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send("LEARN | ONLINE BACKEND .");
})

app.listen(port, () => {
  console.log("index.js running")
})