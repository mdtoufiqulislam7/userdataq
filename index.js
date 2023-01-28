const app = require("./app");
const dav = require("./config/config");
//const config = require("./config/config")
const PORT = dav.app.port || 5000;


app.listen(PORT,()=>{
    console.log(`the server is running at: http://localhost:${PORT}`);
})
