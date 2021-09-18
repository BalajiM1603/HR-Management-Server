const Designation = require("../models/designation.model.js");


exports.save = async(req,res) => {
    const designation = new Designation({
        name: req.body.fieldValue
    })
    designation.save()
    .then(data => {
        res.status(200).json({data:data,msg:"Designation Added Successfully!"});
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}

exports.list = (req,res) => {
    Designation.find()
    .then(data => {
        res.status(200).json({"data":data})
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}