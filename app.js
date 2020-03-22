const http = require("http"); //import files into nodejs "global module"
const routes = require("./routes"); // use ./ because is not global

const server = http.createServer(routes)//createServer takes request listener as an argument or in this case routes from the routes.js file

//we storage the server in a variable
server.listen(3000); //listen for incoming request

//Streams in chuncks so the server do not have to wait, but there is problem with large files
//Node handle this with buffers, constract that holds multiple chuncks
//writeFyleSync: stop the ejecution of the next line until the file is created