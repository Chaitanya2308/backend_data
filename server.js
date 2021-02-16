const express = require('express')
const fs = require('fs')
const cors = require('cors')
const path = require('path')

const port = 8000

const app = express()
app.use(cors())


app.get('/',(req,res)=>
{
    res.send("Rest-countries Api using Node")
})
app.get('/countries',(req,res)=>{
    const data = fs.readFileSync(path.join(__dirname,"countries_data.json"),'utf8')
    res.set({'Content-Type': 'application/json'})
    res.send(JSON.parse(data))
})

app.listen(port,()=>{
    console.log("Get Products data api listening on ",port)
})
