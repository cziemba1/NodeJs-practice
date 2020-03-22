const http = require("http"); //import files into nodejs "global module"

function rqListener(req, res) { //request: incoming request - response: our response to that request
    console.log(req)
}

const server = http.createServer(rqListener); //createServer takes request listener as an argument
//we storage the server in a variable
server.listen(3000); //listen for incoming request