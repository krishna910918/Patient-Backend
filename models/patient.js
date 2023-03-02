const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    contact : {
        type : String,
        required : true
    },

    address : {
        type : String,
        required : true
    },

    pincode : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Patient',patientSchema);