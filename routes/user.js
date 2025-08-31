const { Router } = require("express")
const { userModel } = require("../db");
const bcrypt = require("bcrypt");

const userRouter = Router();


  userRouter.post("/signup", async function(req, res){
    try{
    const {email, password, firstName, lastName } = req.body; //adding todo validation 
    //Todo: hash the password so plain text pw is not stored in the DB
    const trimmedEmail = email?.trim();
    const trimmedPassword = password?.trim();
    const trimmedFirstName = firstName?.trim();
    const trimmedLastName = lastName?.trim();

    //Basic validation
    if (!trimmedEmail || !trimmedPassword || !trimmedFirstName || !trimmedLastName){
      return res.status(400).json({
        msg:"all fields are required"
      })
    }

    //Check if user already exists or not 
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser){
      return res.status(400).json({
        msg: "user already exists"
      })
    }
    // } else {
    //   return res.json({
    //     msg:"create new user or login with Google"
    //   })
    // } 

    const hashedPassword = await bcrypt.hash(password, 10);

  // create a new user
    const user = await userModel.create({
      email: trimmedEmail,
      password: hashedPassword,
      firstName: trimmedFirstName,
      lastName: trimmedLastName
    })

    res.status(201).json({
      msg:"signup successfully",
      
    });

 } catch (error) {
  console.error(error);
  res.status(500).json({
    msg: "internal server error or Error during signup", 
    error: error.message
  })
 }
});


 userRouter.post("/signin", function(req, res){
    res.json({
      msg:"signin endpoint"

    })
 })

 userRouter.post("/purchase", function(req, res){
    res.json({
      msg:"purchase endpoint"
    })
 })


module.exports = {
     userRouter : userRouter 
}