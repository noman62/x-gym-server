const express = require('express')
const { MongoClient } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4n73f.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
console.log(process.env.DB_USER)



const app = express()
app.use(cors())
app.use(express.json())
const port = 8080



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("x-gym").collection("gymList");
  // perform actions on the collection object
  console.log("connected");
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port)