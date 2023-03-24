const express = require("express");
var catme = require('cat-me');
const ejs = require("ejs");
const request = require("request");
const { json } = require("express");
const app = express();
var a = catme();
console.log(a);
// no .ejs required anymore
app.set("view engine", "ejs");
app.get("/", function(req,res){
    res.render("home.ejs");
    
});
app.get("/gamelists", function(req, res){
    //game list
    const games = [
        {title: "Fortnite", creator: "rudy"},
        {title: "Dirty Ball", creator: "rudy"},
        {title: "Buggy Basket", creator: "rudy"},
        {title: "Gutter run", creator: "rudy"}];
    res.render("gamelists.ejs", {
        games : games,
    });
});
app.get("/game/:gtitle/:gcreator", function(req,res){
    const title = req.params.gtitle;
    const creator = req.params.gcreator;
    res.render("game.ejs", {
    title: title, 
    creator: creator,
    games:  games
    }); 
});
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
    res.send("Wrong Place for you to be here");
});
app.listen(3000, () => console.log("Succesfull Attempt"));
