import { Box, Button, Flex, Input , Text, Spinner, Center} from '@chakra-ui/react'
import React, { useState } from 'react'
import moment from "moment"
import {TiWeatherCloudy, TiWeatherPartlySunny, TiWeatherShower, TiWeatherDownpour} from 'react-icons/ti'
import XMLParser from 'react-xml-parser';



const Home = () => {
   

    const date = new Date(); //get today's date
   
    const [city, setCity] = useState('') 
    const [desc, setDesc] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    //function that gets data from api
    const getData = async ()=>{
        
       if (city.trim() === '') {
            return
       }
       setLoading(true)
       const options = {
        method: 'GET',
        headers: new Headers({'content-type': 'application/xml'}),

        };
        try {
            const data = await fetch(`https://onepipe.onrender.com/city/${city}`, options)
            
        const response = await data.json()
        if (response.message ==='The city provided does not exist') {
            setError(true)
            setCity('')
            return
        }
         
        const xmlData = `<Data>
                      ${response.data}
                     </Data>`
        const xml = new XMLParser().parseFromString(xmlData); 
        setDesc(xml.children[1].children[2].value)
        
        
        } catch (error) {
            console.log(error, "errorrr")
            setError(true)
        }finally{
            setLoading(false)
        }
    }

    //function that resets
    const clear =()=>{
        setCity('')
        setDesc('')
        setError(false)
    }

    const handleChange =(e)=>{
       
        setCity(e.target.value) 
        setDesc('')
        setError(false)
    }
  
  return (
    <Box p={3}>
        <Flex alignItems="center" flexDir={["column","row"]} justifyContent="space-between">
           <Box>
                <Text fontSize={[20,25,30]} fontWeight="900" color="black">March 2023</Text>
                <Text fontSize={["12px","16px"]} color="gray">{moment(date).format('dddd MMMM Do  YYYY')}</Text>
           </Box>
            <Box>
               <Text>Lets check the weather condition at your city</Text>
                <Flex fontSize={[20,25,30]} justifyContent="space-around">
                    <TiWeatherCloudy/>
                    <TiWeatherPartlySunny/>
                    <TiWeatherShower/>
                    <TiWeatherDownpour/>
                </Flex> 
            </Box>
        </Flex>
        <Flex w={["90%","70%","70%","50%"]} justifyContent="center" m="50px auto">
            <Input value={city} onChange={handleChange} variant="unstyled" color="black" p={2}placeholder='search city here' border="1px solid black"></Input>
            <Button m={["0 5px","0 10px"]} onClick={getData} colorScheme="teal">find</Button>
            <Button onClick={clear} colorScheme="teal">clear</Button>
        </Flex>
       { loading && <Center mt={10}>
             <Spinner size="xl"/> 
        </Center>}
            <Box m="30px auto" justifyContent="center" w="100%">
              
                
            {desc &&   <> 
                  <Text textAlign="center" ontSize={["16px","20px"]}>Weather Description currently at {city} is</Text>
                  <Text textAlign="center" fontSize={["25px","30px"]} fontStyle="italic">{desc}</Text>
                </>}
                {error &&   <> 
                  <Text textAlign="center" fontSize={["16px","20px"]}>The city {city} provided does not exist</Text>
                </>}
                
             </Box>
        
    </Box>
  )
}

export default Home
