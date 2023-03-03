import { Box, Button, Flex, Input , Text} from '@chakra-ui/react'
import React from 'react'
import moment from "moment"
import {TiWeatherCloudy, TiWeatherPartlySunny, TiWeatherShower, TiWeatherDownpour} from 'react-icons/ti'

const Home = () => {
   

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    const getData = async ()=>{
        const data = await fetch()
        const response = data.json()
        console.log(response,"response")
    }
  return (
    <Box p={3}>
        <Flex alignItems="center" justifyContent="space-between">
           <Box>
                <Text fontSize={30} fontWeight="900" color="black">March 2023</Text>
                <Text fontSize="16px" color="gray">{moment(currentDate).format('dddd MMMM Do  YYYY')}</Text>
           </Box>
            <Box>
               <Text>Lets check the weather condition at your city</Text>
                <Flex fontSize={30} justifyContent="space-around">
                    <TiWeatherCloudy/>
                    <TiWeatherPartlySunny/>
                    <TiWeatherShower/>
                    <TiWeatherDownpour/>
                </Flex> 
            </Box>
        </Flex>
        <Flex w="50%" justifyContent="center" m="0 auto">
            <Input variant="unstyled" color="black" p={2}placeholder='search city here' border="1px solid black"></Input>
            <Button colorScheme="teal">find</Button>
        </Flex>
    </Box>
  )
}

export default Home
