import express from "express"
import {config} from "dotenv"
config()
import ordersRouter from "./routes/ordersRouter.js"
import orderItemRouter from "./routes/orderItemRouter.js"
import paymentsRouter from "./routes/paymentsRouter.js"
import cors from "cors"

import usersRouter from "./Router/usersRouter.js"
import productsCategoriesRouter from "./Router/productsCategoriesRouter.js"
import productsRouter from "./Router/productsRouter.js"

//creating app 
const app =express()
app.use(cors())
app.use(express.json())//to allow data to be added to the Json()file
//to access the env config file 


app.use("/orders", ordersRouter)
app.use("/order_items", orderItemRouter)
app.use("/payments", paymentsRouter)

app.use("/users", usersRouter)
app.use("/productcategories", productsCategoriesRouter)
app.use("/products", productsRouter)

//creating a port 
const PORT = 5050
app.listen(PORT, ()=>{
    console.log("http://localhost:"+PORT)
    console.log("I am running")
})


