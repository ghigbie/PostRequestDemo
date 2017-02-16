var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    res.send("YOU HAVE REACHED THE POST ROUTE");
});

app.get("/friends", function(req, res){
    var friends = ["Tony", "Clayton", "Jason", "Ben", "Perrin", "Olivia"];
    res.render("friends", {friends: friends});
});

app.get("*", function(req, res){
    res.render("pageNotFound");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The server is listening...Yay! Let's celebrate!");
});