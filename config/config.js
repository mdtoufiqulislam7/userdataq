require("dotenv").config();



const dav ={

   app: {
    port: process.env.PORT || 4000,
   },

   db: {
    url: process.env.db_url || "mongodb://localhost:27017/alluser"
   }

}

module.exports = dav;