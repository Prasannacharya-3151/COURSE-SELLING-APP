 const express = require("express")
 const app = express();

 app.post("/user/signup", function(req, res){
    res.json({

    })
 })

 app.post("/user/signin", function(req, res){
    res.json({

    })
 })

 app.post("/courses/purchase", function(req, res){
    res.json({

    })
 })

 app.get("/courses", function(req, res){
    res.json({

    })
 })

 app.listen(3000, function(){
    console.log("server started on port 3000")
 })