const { default: mongoose } = require("mongoose");

const user = require("../models/user.model")

const allusers = (req,res)=>{
    res.status(200).json({
        message: "all users"
    })
}
const oneusers = (req,res)=>{
    res.status(200).json({
        message: "one users"
    })
}
const creatusers = async(req,res)=>{
    try {
        const newuser = new user({
            name: req.body.name,
            age: Number(req.body.age),
            
        })
        await newuser.save();
        res.status(200).json(newuser);
    } catch (error) {
        res.status(201).send(error);
    }
}
const updateusers = (req,res)=>{
    res.status(200).json({
        message: "data update"
    })
}
const deleteusers = (req,res)=>{
    res.status(202).json({
        message: "delete all user users"
    })
}


module.exports= {allusers,oneusers,creatusers,updateusers,deleteusers}