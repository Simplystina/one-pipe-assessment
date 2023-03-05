# WEATHER API
The branch contains the description of the api for this basic weather app

## SET UP

Install NodeJS
pull this repo
Open the folder on your local computer
At the terminal, run npm install to install all packages
run npm run start:dev or nodemon to start the server

## LIVE URL
[https://onepipe.onrender.com](https://onepipe.onrender.com)

## API DOCUMENTATION AND ROUTES

### ROUTE
GET city - https://onepipe.onrender.com/city/:city

params = /city

Example request

Header-  "application/xml"
GET https://onepipe.onrender.com/city/lagos

Example Response
```{
  "status": true,
  "data": 
  ```xml 
  <coord>   
     <lon>3.75</lon>  
      <lat>6.5833</lat>
   </coord>
   <weather>    
       <id>803</id>    
       <main>Clouds</main>  
       <description>broken clouds</description>  
      <icon>04d</icon>
    </weather>
    <base>
        stations
    </base>
    <main>   
        <temp>305.33</temp>   
        <feels_like>312.33</feels_like>   
        <temp_min>305.33</temp_min>
        <temp_max>305.33</temp_max>   
        <pressure>1007</pressure>
        <humidity>67</humidity>   
        <sea_level>1007</sea_level>
        <grnd_level>1007</grnd_level>
   </main>
  <visibility>10000</visibility>
  <wind>    
        <speed>4.23</speed>
        <deg>204</deg>
        <gust>6.02</gust>
   </wind>
   <clouds>
        <all>59</all>
  </clouds>
  <dt>1677948799</dt>
  <sys>   
     <type>1</type>
     <id>1185</id>
     <country>NG</country>
     <sunrise>1677909399</sunrise>
     <sunset>1677952638</sunset>
   </sys>
   <timezone>3600</timezone>
   <id>2332453</id>
  <name>Lagos</name>
  <cod>200</cod>```
}```
