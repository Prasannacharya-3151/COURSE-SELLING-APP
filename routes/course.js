const {Router} = require("express")
const courseRouter = Router();

 courseRouter.get("/course/purchases", function(req, res){
    res.json({

    })
 })

 courseRouter.get("/courses/preview", function(req, res){
    res.json({

    })
 })

module.exports = {
    createCourseRoutes : createCourseRoutes
}