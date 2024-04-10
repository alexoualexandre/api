const express = require('express');
const app = express();

const data = fetch('https://finalspaceapi.com/api/v0/character').then((response)=>response.json())
app.get('/data',(req,res)=>{res.json(data)});
app.listen(3310);
console.log(app)
