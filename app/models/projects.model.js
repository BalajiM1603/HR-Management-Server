const mongoose = require("mongoose");

const  projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    clientName: {
        type: String,
        required: false
    },
    projectCost: {
        type: String,
        required: false
    },
    projectHead: {
        type: String,
        required: false
    },
    projectManager: {
        type: Array,
        required: false
    },
    projectUsers: {
        type: Array,
        required: false
    },
    description: {
        type: String,
        required: false
    }
    
})


module.exports = mongoose.model("Project",projectSchema);