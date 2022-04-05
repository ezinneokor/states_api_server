const express = require("express");
const cors = require("cors");
const fs = require("fs");
const dotenv = require("dotenv")

dotenv.config();



// PORT
const PORT = process.env.PORT || 5000;


// SERVER

const server = express();

//Middleware
server.use(express.json());
server.use(cors());


//Endpoint

//Home
server.get("/", function(request, response){

    response.send({
        message: 'Welcome home',
        data: null
    })

})

server.get("/states", function(request,response){
    //  Using readFileSync Method

    // data = fs.readFileSync("data.json");
    // data = JSON.parse(data);

    // Using readFile Method

    fs.readFile("data.json", function(error,result){
        if(error) throw new error;
        data = JSON.parse(result);
        console.log(data);
        response.send(data)
    })
   

})




server.listen(PORT, ()=> console.log("Listening on port:",PORT));