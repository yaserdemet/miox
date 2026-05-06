const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name : String,
    surname : String,
    age : Number,
    role : String,
    phoneNumber : Number,
    education : String
})

const User = mongoose.model("User",UserSchema);

module.exports = User;