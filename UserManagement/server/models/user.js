/**
 * Created by arlingan on 3/24/2016.
 */

// Initialize module.
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
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
    }
});

module.exports = mongoose.model('User', userSchema);
    
