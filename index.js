const express = require('express')
const fetch = require('node-fetch');
require('dotenv').config()

const app = express()
const port = 3000

const url = "https://developers.zomato.com/api/v2.1/categories";

const options = {
  headers: {
    "Accept": "application/json",
    "user-key": process.env.apiKey
  }
};

fetch(url, options)
  .then( res => res.json() )
  .then( data => console.log(data) );

app.get('/', (req, res) => res.send('zomato api check console'))



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))