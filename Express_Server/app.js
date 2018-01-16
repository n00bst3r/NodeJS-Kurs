/**
 * Created by rajic on 16.01.2018.
 */
var express = require("express");

// express ist eine Funktion und muss ausgeführt werden.
var app = express();

app.set("view engine", "ejs");
//__dirname ist der Pfad zu app.js
app.set("views",__dirname +"/views");

//Middlewear agiert im Prinzip wie ein Filter in Java
app.use(function(req,res,next){
    console.log(req.url);
    next();
});

app.get("/",function(req, res){
    res.render("landing", {
        title: "Node.JS",
        items : [
            "express",
            "node",
            "javascript"
        ],
        desc : "Ich bin eine Beschreibung"
    }); //.ejs hinter Dateinamen kann weg gelassen werden.
});

app.get("/startseite", function (req,res){
    res.send("Voll die Startseite");
});
app.listen(9999);