"use-strict";
const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to our app")
})
app.post('/date',(req,res)=>{
    const country = req.body.country;
    const utcOffset = req.body.utcOffset;
    let time = new Date();
    const timeZone = time.getTimezoneOffset()/60 + utcOffset;
    time.setHours(time.getHours()+timeZone);
    res.status(200).send({
        time
    })
})

app.listen(PORT,()=>{
    console.log('server up');
})