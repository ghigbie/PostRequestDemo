var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("*", function(req, res){
    res.render("pageNotFound");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The server is listening...Yay! Let's celebrate!");
});