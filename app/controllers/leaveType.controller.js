const LeaveType = require("../models/leaveType.model");


exports.save = async (req, res) => {

    const leave = new LeaveType({
        leave_name: req.body.leave_name,
        leave_code: req.body.leave_code,
        leave_type: req.body.leave_type,
        leave_count: req.body.leave_count,
        leave_time: req.body.leave_time,
        leave_status: req.body.leave_status
    })

    leave.save()
        .then(data => {
            res.status(200).json({ data: data, msg: "Leave type added successfully!" });
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || "Error"
            })
        })
}

exports.list = (req, res) => {
    LeaveType.find()
        .then(leaves => {
            res.status(200).json({ data: leaves })
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || "Error"
            })
        })
}

exports.update = async (req, res) => {

    const leave = {
        leave_name: req.body.leave_name,
        leave_code: req.body.leave_code,
        leave_type: req.body.leave_type,
        leave_count: req.body.leave_count,
        leave_time: req.body.leave_time,
        leave_status: req.body.leave_status
    }
    LeaveType.findByIdAndUpdate({ _id: req.query.leaveId }, leave, { new: true })
        .then(leave => {
            res.status(200).json({ data: leave, msg: "Leave Updated Successfully!" });
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || "Error"
            })
        })
}

exports.findOne = (req, res) => {
    console.log(req, 'request')
    LeaveType.findById(req.query.leaveId)
        .then(leave => {
            if (!leave) {
                return res.status(400).json("leave type not found");
            }
            res.status(200).json({ data: leave })
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || "Error"
            })
        })
}

exports.delete = (req, res) => {
    LeaveType.findByIdAndDelete(req.query.leaveId)
        .then(leave => {
            res.status(200).json({ msg: "Leave type Deleted Successfully!" })
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || "Error"
            })
        })
}
