var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var friends = ["Tony", "Clayton", "Jason", "Ben", "Perrin", "Olivia"];

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    console.log(req.body.newfriend);
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    //res.send("YOU HAVE REACHED THE POST ROUTE");
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.get("*", function(req, res){
    res.render("pageNotFound");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The server is listening...Yay! Let's celebrate!");
});