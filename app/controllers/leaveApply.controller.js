const leaveApply = require('../models/leaveApply.model')

exports.save = async (req, res) => {

    const apply = new leaveApply({
        employeeID: req.body.employeeID,
        leaveType: req.body.leaveType,
        fromDate: req.body.fromDate,
        toDate: req.body.toDate,
        teamEMail: req.body.teamEMail,
        reason: req.body.reason
    })

    apply.save()
        .then(data => {
            res.status(200).json({ data: data, msg: "Leave Applied successfully!" });
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || "Error"
            })
        })
}