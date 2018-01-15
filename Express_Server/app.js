/**
 * Created by rajic on 16.01.2018.
 */
var express = require("express");

// express ist eine Funktion und muss ausgeführt werden.
var app = express();

//Middlewear agiert im Prinzip wie ein Filter in Java
app.use("/middleware",function(req,res,next){
    console.log(req.url);
    next();
});

app.get("/",function(req, res){
    res.send("Server is running...")
});

app.get("/startseite", function (req,res){
    res.send("Voll die Startseite");
});
app.listen(9999);