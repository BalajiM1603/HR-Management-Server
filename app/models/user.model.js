const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    employeeID: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    firstName: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    lastName:{
        type: String,
        required: true,
        min: 6,
        max: 255
        
    },
    emailId: {
        type: String,
        required: true,
        min: 8,
        max: 16
    },
    date: {
        type: Date,
        default: Date.now
    },
    nickName: {
        type: String,
        required: false,
        min:6,
        max: 255
    },
    password: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    department: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    location: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    designation: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    sourceofhire: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    employmentType: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    employeeStatus: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    reportingManager: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    joinDate: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    seatingLocation: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    phoneNumber: {
        type: Number,
        required: false
    },
    currentExp: {
        type: Number,
        required: false
    },
    personalMobileNumber: {
        type: Number,
        required: false
    },
    address: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    aadhaarNumber: {
        type: Number,
        required: false
    },
    panNumber: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    personalEmailID: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    dob: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    age: {
        type: Number,
        required: false
    },
    jobDescription: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    aboutMe: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    askMeAboutExpertise: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    exitDate: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    gender: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    maritalStatus: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    workExperience: {
        type: Array,
        required: false,
        min: 6,
        max: 255
    },
    educationalDetails: {
        type: Array,
        required: false,
        min: 6,
        max: 255
    },
    dependentDetails: {
        type: Array,
        required: false,
        min: 6,
        max: 255
    }
})


module.exports = mongoose.model('User', userSchema);