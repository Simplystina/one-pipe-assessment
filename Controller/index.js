const axios = require("axios")

const { json2xml } = require('xml-js')


require("dotenv").config()

exports.getCity = async(req, res)=>{
    try {
        const {city} = req.params
    

    const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
    const {data} = await axios.get(baseUrl)
     console.log(data)
    const json = JSON.stringify(data);

       //convert the data to xml content type
      const xml = json2xml(json, { compact: true, spaces: 4 });

    res.header('Content-Type', 'application/xml')
     return res.status(201).json({status: true, data: xml})
     
    } catch (error) {
        console.log(error)
        res.header("Content-Type" , "application/json")
        res.status(404).json({message:"The city provided does not exist"})
    }

}