import express from "express"
import {config} from "dotenv"
config()
import cors from "cors"

//creating app 
const app =express()
app.use(cors())
app.use(express.json())//to allow data to be added to the Json()file
//to access the env config file 
app.use(express.json())

//creating a port 
const PORT = 5050
app.listen(PORT, ()=>{
    console.log("http://localhost:"+PORT)
    console.log("I am running")
})



