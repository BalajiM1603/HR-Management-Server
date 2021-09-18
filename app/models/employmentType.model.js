const mongoose = require('mongoose');

const employmentTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model("EmploymentType",employmentTypeSchema);