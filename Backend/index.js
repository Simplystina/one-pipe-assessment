const express = require("express")
const controller = require("./Controller/index")

require("dotenv").config()
const app = express()



const PORT = 3000

app.get('/city/:city', controller.getCity)

app.get('/', (req,res)=>{
    return res.status(200).send({status:true, message: "Home Route"})
})

app.use('*', (req,res)=> {
    return res.status(404).json({message: 'route not found'})
})


app.listen(PORT, ()=>{
    console.log("Server is listening at ", PORT)
})