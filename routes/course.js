const {Router} = require("express")
const courseRouter = Router();

 courseRouter.get("/purchases", function(req, res){
    res.json({
      msg:"purchase endpoint"
    })
 })

 courseRouter.get("/preview", function(req, res){
    res.json({
      msg:"preview endpoint"
    })
 })

module.exports = {
    courseRouter: courseRouter
}