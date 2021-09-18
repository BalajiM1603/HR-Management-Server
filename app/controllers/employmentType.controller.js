const EmploymentType = require("../models/employmentType.model.js");


exports.save = async(req,res) => {
    const employmentType = new EmploymentType({
        name: req.body.fieldValue
    })
    employmentType.save()
    .then(data => {
        res.status(200).json({data:data,msg:"Employment Type Added Successfully!"});
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}

exports.list = (req,res) => {
    EmploymentType.find()
    .then(data => {
        res.status(200).json({"data":data})
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}