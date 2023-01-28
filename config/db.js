const mongooes = require("mongoose");

const config = require("./config");



mongooes.connect(config.db.url).then(()=>{
    console.log("mongodb atlas is connected");
}).catch((error)=>{
    console.log(error);
    process.exit(1);
})