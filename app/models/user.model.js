const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    role:{
        type:String,
        default:"user",
        enum:["user", "admin"]
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 16
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('User', userSchema);