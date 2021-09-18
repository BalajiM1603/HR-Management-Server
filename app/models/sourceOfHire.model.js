const mongoose = require('mongoose');

const sourceOfHireSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model("SourceOfHire",sourceOfHireSchema);