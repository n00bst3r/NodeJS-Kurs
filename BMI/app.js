/**
 * Created by rajic on 16.01.2018.
 */
var express = require("express");

var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/public", express.static("public"));

app.get("/", function(req, res) {
    res.render("pages/landing");
});

app.get("/result", function(req, res) {
    var m = (parseInt(req.query.cm, 10) / 100);
    var kg = parseInt(req.query.kg, 10);
    //Wenn Größe in m gleich 0 oder not a number, dann zurück auf die Startseite.
    if (m == 0 || isNaN(m)) {
        res.redirect("/");
    } else {
        var bmi = (kg / (m * m));
        res.render("pages/result", {
            bmi: bmi
        });
    }

});

app.listen(9999);
