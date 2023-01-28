const { default: mongoose, trusted } = require("mongoose");



const userschema = mongoose.Schema({
   
    name: {
        type: String,
        reuire: true,
    },
    age: {
        type: Number,
        reuire: true,
    },
    dateOne: {
        type: Date,
        default: Date.now
    },
})

module.exports= mongoose.model("userdata",userschema);