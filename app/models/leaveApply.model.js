const mongoose = require('mongoose')

const leaveApplySchema = new mongoose.Schema({
    employeeID: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    leaveType: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    fromDate: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    toDate: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    teamEMail: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    reason: {
        type: String,
        required: true,
        min: 6,
        max: 255
    }
})


module.exports = mongoose.model('leaveApply', leaveApplySchema)