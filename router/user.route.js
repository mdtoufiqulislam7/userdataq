const express = require("express");
const { allusers, oneusers, creatusers } = require("../controlars/user.controlar");
const route = express.Router();





route.get("/",allusers)
route.get("/:id",oneusers);
route.post("/api/user",creatusers);


module.exports = route;