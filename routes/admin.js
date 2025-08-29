const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/signup", function(req, res){
    res.json({
        msg:"signup endpoint"
    })
})

adminRouter.post("/signin", function(req, res){
    res.json({
        msg:"signin endpoint"
    })
})

adminRouter.post("/course", function(req, res){
    res.json({
        msg:"create a course enpoint"
    })
})

adminRouter.put("/course", function(req, res){
    msg:"update course endpoint"
})

adminRouter.put("/course/bulk", function(req, res){
    res.json({
        msg:"update course endpoint"
    })
})


module.exports = {
    adminRouter : adminRouter
}