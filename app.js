require("./config/db");
const express = require("express");
const app = express();
const cors = require("cors");
const userrouter = require("./router/user.route")



app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.use(userrouter);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+ "/./viwes/index.html")
})

app.use((req,res,next)=>{
    res.status(404).json({
        message: "404 error"
    })
})

app.use((err,req,res,next)=>{
    res.status(500).json({
        messgae: "server error halding"
    })
})





module.exports= app;



