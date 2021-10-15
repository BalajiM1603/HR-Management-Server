const mongoose = require("mongoose");

const  clientSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true
    },
    currency: {
        type : String,
        required: true
    },
    currency: {
        type : String,
        required: true
    },
    billingMethod: {
        type : String,
        required: false
    },
    emailId: {
        type : String,
        required: false
    },
    firstName: {
        type : String,
        required: false
    },
    lastName: {
        type : String,
        required: false
    },
    phone: {
        type : Number,
        required: false
    },
    mobileNumber: {
        type : Number,
        required: false
    },
    fax: {
        type : String,
        required: false
    },
    streetAddress: {
        type : String,
        required: false
    },
    city: {
        type : String,
        required: false
    },
    state: {
        type : String,
        required: false
    },
    zipCode: {
        type : String,
        required: false
    },
    country: {
        type : String,
        required: false
    },
    industry: {
        type : String,
        required: false
    },
    companySize: {
        type : String,
        required: false
    },
    description: {
        type : String,
        required: false
    }
})


module.exports = mongoose.model("Client",clientSchema);