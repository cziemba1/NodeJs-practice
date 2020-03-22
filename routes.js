const fs = require("fs"); //import package that allows to work with manage files system

const requestHandler = (req, res) => {//to communicate this file with app.js
    //function rqListener(req, res) { //request: incoming request - response: our response to that request
    //console.log(req);
    //console.log(req.url, req.method, req.headers); //access information about our request
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>My First Page </title></header>") //response to the server
        res.write("<body><form action='/message' method='POST'><input type='text'><button type='submit'>Send</button></form></body>"); //send an input POST request to message
        res.write("</html>");
        return res.end(); //must
    }
    if (url === "/message" && method === "POST") {
        const body = [];//allow us to listen certain events. Tha data event will be fired whenever a chunck is ready to be read
        req.on("data", (chunck) => { //the data request receive a "chunck" of data as attribute
            console.log(chunck);
            body.push(chunck);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString(); //Buffer object, add all the chuncks inside body //toString because i know its string information
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt", message, err => {
                res.statusCode = 302;//redirect to "/" from "/message". 302 means redirection
                res.setHeader("Location", "/");
                return res.end();
            });
        });
        //fs.writeFileSync("message.txt", "Dummy text"); // create a new text file
        //res.writeHead(302, ) //writeHead: allows to write meta information in one go
    }
    res.setHeader("Content-Type", "text/html"); //send to the server a response about headers
    res.write("<html>");
    res.write("<head><title>My First Page </title></header>") //response to the server
    res.write("</html>");
    res.end(); //end response to the server 
};

module.exports = requestHandler; //Node Global object to export


