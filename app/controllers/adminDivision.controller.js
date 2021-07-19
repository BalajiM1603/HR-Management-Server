const Division = require("../models/adminDivision.model");


exports.save = async(req,res) => {
    let newDivision = [];
    const division = new Division({
        "division": req.body.division,
        "sector": req.body.sector
    })
    try {
        const sectorCheck = await Division.find({"sector": req.body.sector})
        if(Object.keys(sectorCheck).length == 0) {
            console.log('if');
            await division.save()
            res.status(200).send({data:division, Msg: "Division Added Successfully"})
        } else {
            console.log('else');
            let oldDivision = sectorCheck[0].division;
            newDivision = oldDivision.concat(req.body.division);
            console.log(newDivision);
            var valueArr = newDivision.map(function(item) { 
                return item.division 
            });
            var isDuplicate = valueArr.some(function(item, idx){ 
                return valueArr.indexOf(item) != idx 
            });
            if(!isDuplicate) {
                const division = await Division.findByIdAndUpdate({"_id":sectorCheck[0]._id},{division:newDivision})
                res.status(200).send({data:division, Msg: "Division Added Successfully"})
            } else {
                res.status(301).send({Msg:"duplicate found in division"})
            }
        } 
    } catch(err) {
        res.status(500).send({
            message: err.message || "Error"
        })
    }
}

exports.findOne = async(req,res) => {
    try {
        const division = await Division.findById(req.query._id)
        res.status(200).send(division);
    } catch(err) {
        res.status(500).send({
            message: err.message || "Error"
        })
    }
}

exports.findBySector = async(req,res) => {
    try {
        const division = await Division.find({"sector":req.query.sector})
        res.status(200).send(division);
    } catch(err) {
        res.status(500).send({message: err.message || "Error"})
    }
}


exports.update = async(req,res) => {
    let newDivision = [];
    
    try {
        const sectorCheck = await Division.find({"_id":req.query._id})
        let oldDivision = sectorCheck[0].division;
        newDivision = oldDivision.concat(req.body.division);
        var valueArr = newDivision.map(function(item) { 
            return item.division 
        });
        var isDuplicate = valueArr.some(function(item, idx){ 
            return valueArr.indexOf(item) != idx 
        });
        if(!isDuplicate) {
            const divisionUpdate = new Division({
                "division": newDivision,
                "sector": req.body.sector
            })
            const division = await Division.findByIdAndUpdate({"_id":req.query._id},{division:divisionUpdate})
            res.status(200).send({data:division, Msg: "Division Updated Successfully"})
        } else {
            res.status(301).send({Msg:"duplicate found in division"})
        }
    } catch(err) {
        res.status(500).send({
            message: err.message || "Error"
        })
    }

}

exports.update = async(req,res) => {
    const divisionData = {
        "division":req.body.division,
        "sector": req.body.sector
    }
    try {
        const divisionResult = await Division.findByIdAndUpdate({"_id" : req.query._id},divisionData,{new:true})
        res.status(200).send(divisionResult);
    } catch(err) {
        res.status(500).send({
            message: err.message || "Error"
        }) 
    }
}

exports.delete = async(req,res) => {
    try {
        const divisionDelete = await Division.findByIdAndDelete({"_id" : req.query._id })
        res.status(200).send(divisionDelete);
    } catch(err) {
        res.status(500).send({
            message: err.message || "Error"
        }) 
    }
}


exports.list = async(req,res) => {
    try {
        const divisions = await Division.find()
        res.status(200).send(divisions)
    } catch(err) {
        res.status(500).send({
            message: err.message || "Error"
        })
    }
}


