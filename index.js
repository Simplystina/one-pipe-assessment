const express = require("express")
const controller = require("./Controller/index")
const bodyParser = require("body-parser")
const cors = require("cors")

require("dotenv").config()
const app = express()



const PORT = process.env.PORT
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())


app.options('*', cors()); // preflight OPTIONS; put before other routes
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

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