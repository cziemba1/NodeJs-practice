const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.render("dogs.ejs")
});

app.get("/fallInLove/:thing", function (req, res) {
    let thing = req.params.thing;

    res.render("love.ejs", { thingVar: thing });
})


app.listen(3000, function () {
    console.log("hi")
})