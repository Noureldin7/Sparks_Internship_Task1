const http = require("http");
require("dotenv")
const app = require("./app")

const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})