const Department = require("../models/department.model.js");


exports.save = async(req,res) => {
    const department = new Department({
        name: req.body.fieldValue
    })
    department.save()
    .then(data => {
        res.status(200).json({data:data,msg:"Department Added Successfully!"});
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}

exports.list = (req,res) => {
    Department.find()
    .then(data => {
        res.status(200).json({"data":data})
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}