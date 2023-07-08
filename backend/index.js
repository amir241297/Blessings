const  express= require('express')
const app=express()
const {connection}=require('./config/db')
require("dotenv").config({path:"./config/.env"})


const {loginRoutes}=require('./routes/loginRoutes')
const {logoutRoutes}=require('./routes/logoutRoutes')
const { createAccountRoutes } = require('./routes/createAccountRoutes')

app.use(express.json()) // it will stringify our data which is comming from frontend side.
app.get("/",(req,res)=>{ 
    res.send("Home")
})

app.use("/login",loginRoutes)
app.use("/logout",logoutRoutes)
app.use("/createAccount",createAccountRoutes)

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("Server Connected to DB")
    }catch(err){
        console.log("Error while connecting to DB")
    }
    console.log(`BLESSING running PORT ${process.env.PORT}`)
})