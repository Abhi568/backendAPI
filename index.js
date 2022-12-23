const express =  require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const PORT  = process.env.PORT || 3000
const apiData = require("./data.json")

app.get("/",(req,res)=>{
    res.send("sending response")
})

app.get("/service", (req,res)=>{
    res.send(apiData)
})
app.listen(PORT, ()=>{
console.log( `Listening on port number ${PORT}`)
})
