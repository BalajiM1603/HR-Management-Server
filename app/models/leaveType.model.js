const mongoose = require('mongoose');

const leaveTypeSchema = new mongoose.Schema({
    leave_name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    leave_code: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    leave_type: {
        type: String,
        required: true,
        min: 8,
        max: 16
    },
    leave_count: {
        type: String,
        required: true,
        min: 8,
        max: 16
    },
    leave_time: {
        type: String,
    },
    leave_status :{
        type : Boolean
    }
})


module.exports = mongoose.model('LeaveType', leaveTypeSchema);