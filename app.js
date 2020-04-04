const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("dogs")
});

app.get("/fallInLove/:thing", function (req, res) {
    let thing = req.params.thing;
    res.render("love", { thingVar: thing });
})

app.get("/post", function (req, res) {
    let posts = [
        { title: "1 post", author: "Claudia" },
        { title: "Cakes", author: "Julian" },
        { title: "Ice Cream", author: "Cami" },
    ];
    res.render("posts", { posts: posts });
})


app.listen(3000, function () {
    console.log("hi")
})