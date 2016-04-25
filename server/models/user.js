/**
 * Created by arlingan on 3/24/2016.
 */

// Initialize module.
var mongoose = require('mongoose');
var db = require('../db');
mongoose.connect(db.url, function(err, result) {
    if(!err) console.log("Connected to the database");
});
var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: false
    },
    company: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    },
    dov: {
        type: Date,
        required: true
    },
    pov: {
        type: String,
        required: true
    },
    rov: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('users', userSchema);
    
