let request = require("request");

request("http://api.openweathermap.org/data/2.5/weather?q=Argentina&appid=da36797f5174e07fac58fa5cdc8062ff", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        let parseData = JSON.parse(body);
        console.log(parseData["weather"]["main"]);
    }
})