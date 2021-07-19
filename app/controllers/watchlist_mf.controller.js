const Watchlist_MF = require("../models/watchlist_mf.model");
const ObjectID = require('mongodb').ObjectID

exports.findOne = (req,res) => {
    Watchlist_MF.find({"userId":req.body.userId})
    .then(data => {
        if(data.length === 0) {
            const watchlist_mf = new Watchlist_MF({
                userId: req.body.userId,
                funds: [{
                    fundName:req.body.fundName,
                    investingSector: req.body.investingSector,
                    fundId: req.body.fundId
                }]
            })
        
            watchlist_mf.save()
            .then(data=>{
                res.status(200).json({data:data,msg:"Fund added to watchlist"})
            }).catch(err=>{
                res.status(500).send({
                    message: err.message || "Error"
                });
            })
        } else {
            Watchlist_MF.updateOne(
                { "userId": req.body.userId },
                { "$push": { "funds": { "fundName": req.body.fundName, "investingSector": req.body.investingSector, "fundId": req.body.fundId } } }
            )
            .then(data => {
                res.status(200).json({data:data,msg:"Fund added to watchlist"})
            }).catch(err=>{
                res.status(500).send({
                    message: err.message || "Error"
                });
            })
            
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error"
        })
    })
}


exports.list = async(req, res) => {
    try {
        Watchlist_MF.findOne({"userId": req.query.userId})
        .then(watchlist => {
            res.send(watchlist);
        })
    } catch {
        res.status(500).send({
            message: err.message || "Error"
        });
    }
};


exports.remove = async(req,res) => {
    let fundId = req.body.map(e =>{
        return e
    })
    try {
        let data = await Watchlist_MF.findOneAndUpdate({"userId":req.query.userId},{"$pull":{"funds":{"fundId":{"$in":fundId}}}})
        res.status(200).send({
            message:"Deleted"
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || "Error"
        });
    }
}


exports.findOneFund = async(req,res) => {
    console.log(req.query.userId);
    console.log(req.query.fundName);
    try{
        const data = await Watchlist_MF.find({"userId":req.query.userId,"funds.fundName": req.query.fundName})
        console.log(data);
        res.status(200).send(data);         
    } catch(error) {
        res.status(400).send({
            message: error.message || "Error"
        })
        
    }
}
