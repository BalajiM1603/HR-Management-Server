const Location = require("../models/location.model.js");


exports.save = async(req,res) => {
    const location = new Location({
        name: req.body.fieldValue
    })
    location.save()
    .then(data => {
        res.status(200).json({data:data,msg:"Location Added Successfully!"});
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}

exports.list = (req,res) => {
    Location.find()
    .then(data => {
        res.status(200).json({"data":data})
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}