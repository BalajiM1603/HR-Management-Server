const SourceOfHire = require("../models/sourceOfHire.model.js");


exports.save = async(req,res) => {
    const sourceOfHire = new SourceOfHire({
        name: req.body.fieldValue
    })
    sourceOfHire.save()
    .then(data => {
        res.status(200).json({data:data,msg:"source of hire Added Successfully!"});
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}

exports.list = (req,res) => {
    SourceOfHire.find()
    .then(data => {
        res.status(200).json({"data":data})
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}