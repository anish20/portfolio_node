const express=require("express");
require('dotenv').config()
const cors=require("cors");
const { router } = require("./routes");
const { indexTaskSchedulder } = require("./scheduler");
const fileUpload = require("express-fileupload");
const { BASE_URL } = require("./config/environmentVariable");
const mongoose = require('mongoose');

const app=express();
const PORT=process.env.PORT || 9000;
// let BASE_URL= process.env.NODE_ENV==='development' ? process.env.APP_URL_DEV : process.env.APP_URL

// Middleware configure
app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(express.static("public")); // middleware for access to upload inside public folder
app.use(express.urlencoded({extended:false}))
app.use("/insurance_crm/api",router)


//Global Error handler

// Job scheduler
indexTaskSchedulder();


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json(err?.message)
})

app.use("/",(req,res)=>{
    res.send("Welcome to my API")
})

app.listen(PORT,()=>{
    console.log(`Server Runing on PORT  ${PORT}`);
    console.log(process.env.NODE_ENV);
    console.log(BASE_URL);


})