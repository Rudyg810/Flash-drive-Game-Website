const express = require("express");
var catme = require('cat-me');
const ejs = require("ejs");
const request = require("request");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({extended: true}));
console.log("0");
var a = catme();
console.log(a);
// no .ejs required anymore
app.set("view engine", "ejs");
app.get("/", function(req,res){
    res.render("home.ejs");
    
});
const games = [
    {title: "Run3", creator: "rudy", width: "455", height: "500", thumbnail: "run 3.webp", filename: "Run 3.swf"},
    {title: "Dirty Ball", creator: "rudy", width: "455", height: "500" , thumbnail: "run 3.webp", filename: "Run 3.swf"},
    {title: "Buggy Basket", creator: "rudy", width: "455", height: "500" , thumbnail: "run 3.webp", filename: "Run 3.swf"},
    {title: "Gutter run", creator: "rudy", width: "455", height: "500", thumbnail: "run 3.webp", filename: "Run 3.swf"}];

app.get("/gamelists", function(req, res){
    games: games
    res.render("gamelists.ejs", {
        games : games,
    });
});

console.log("1")
app.get("/add", function(req,res){
    res.render("add.ejs",{});
});
 
app.post("/add", function(req,res){
    var data = req.body;
    games.push(data)
    
});
app.get("/game/:title/:creator/:width/:height/:thumbnail/:filename", function(req,res){
    const title = req.params.title;
    const creator = req.params.creator;
    const width = req.params.width;
    const height = req.params.height;
    const thumbnail = req.params.thumbnail;
    const filename = req.params.filename
    res.render("game.ejs", {
    title: title, 
    creator: creator,
    width: width,
    height: height,
    thumbnail: thumbnail,
    filename: filename
    }); 
});
console.log("4")
//mines apni key is wrong one so fuk off u can try other links in this portion:
//some funcs to remember
//var data = JSON.parse(body)
//console.log(body.query)
//request('https://api.unsplash.com/photos/?client_id=GacJMOvxtskwNXJTU3pS3Z5mvZhwVT7u6ycxuPStDMw',function(error, response, body){
//    if (error) {
//        console.log("Error in Http")
//        
//    } else {
//        var data = JSON.parse(body)
//        console.log(data)
//        
//    }
//});


//app.get("/pictures/:pgnumber", function(req, res){
//    var pgnumber = req.params.pgnumber;
//    request("https://api.unsplash.com/photos?client_id=GacJMOvxtskwNXJTU3pS3Z5mvZhwVT7u6ycxuPStDMw&page="+pgnumber, function(error, response, body){
//        if (error) {
//            console.log("Error in PIcs https");
//        } else {
//            res.render("pictures.ejs", {
//                picdata : JSON.parse(body)
//            });
//
//        }
//    });
//    
//});












//Displaying Games


app.get("*", function(req, res){
   // res.send("404 Wrong Place for you to be here");
   res.render("error.ejs", {});
});
console.log("5")
app.listen(3000, () => console.log("Succesfull Attempt"));
