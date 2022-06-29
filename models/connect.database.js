const { MongoClient, ServerApiVersion } = require('mongodb');

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jufnc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const database = client.db("learn-online-database");
const collection = database.collection("learn-online-collection1");
const collection_admin = database.collection("learn-online-collection-admin");
const collection_User = database.collection("userCollection");

module.exports = {
    DATABASE: client,
    collection:collection,
    collection_admin:collection_admin,
    collection_User:collection_User
}


