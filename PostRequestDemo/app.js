const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let friends = ["Claudia", "Julian", "Esteban", "Micaela"];

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("home");
})

app.get("/friends", function (req, res) {
    res.render("friends", { friends: friends });
})

app.post("/addfriend", function (req, res) {
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends")
})

app.listen(3000, function () {
    console.log("Server is running...")
})