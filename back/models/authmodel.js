const mongoose = require("mongoose");
const User = require("./usermodel");
const authSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,

    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    
},{timestamps: true});

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth; 