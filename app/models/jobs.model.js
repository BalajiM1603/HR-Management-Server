const mongoose = require("mongoose");

const  jobSchema = new mongoose.Schema({
    jobName: {
        type: String,
        required: true
    },
    project: {
        type : String,
        required: false
    },
    startDate: {
        type : String,
        required: false
    },
    endDate: {
        type : String,
        required: false
    },
    hours: {
        type : String,
        required: false
    },
    assignees: {
        type : Array,
        required: false
    },
    ratePerHour: {
        type : String,
        required: false
    },
    description: {
        type : String,
        required: false
    },
    billingStatus: {
        type : String,
        required: false
    },
    workItem: {
        type : Array,
        required: false
    }
})


module.exports = mongoose.model("Job",jobSchema);