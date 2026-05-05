const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    name : String,
    leader : String,
    date : {
        type : Date,
        default : Date.now
    }
})

const Team = mongoose.model("Team", TeamSchema);
module.exports = Team