const {Schema, default : mongoose} = require("mongoose");

const userSchema = new Schema({

})

const adminSchema = new Schema({

})

const courseSchema = new Schema({

})

const purchaseSchema = new Schema({

})

const userModel = mongoose.model("user", userSchema)
const adminModel = mongoose.model("admin", adminSchema)
const courseModel = mongoose.model("course", courseSchema)
const purchaseModel = mongoose.model("purchase", purchaseSchema)
