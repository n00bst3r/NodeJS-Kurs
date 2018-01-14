/**
 * Created by rajic on 14.01.2018.
 */

var http = require("http");
var fs = require("fs");

var requestCount = 0;


var server = http.createServer(function(req, res){
    console.log("Incoming request: "+req.url)
    if(req.url.indexOf("/public")=== 0){
        fs.readFile("."+req.url,{},function(err,data){
           if(err){
               res.writeHead(404, {
                   "Content-Type":"text/plain"
               });
               res.end("404 file not found");
           } else {
               var contentType = null;
               if(req.url.endsWith(".jpg")){
                   contentType = "image/jpeg";
               }else {
                   contentType = "text/plain";
               }
               res.writeHead(200, {
                   "Content-Type":contentType
               });
               res.end(data);
           }
        });
    }

})

server.listen("9999");
