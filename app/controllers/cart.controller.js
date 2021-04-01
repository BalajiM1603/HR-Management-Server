const Cart = require("../models/cart.model");
const ObjectID = require('mongodb').ObjectID

exports.findOne = (req,res) => {
    Cart.find({"userId":req.body.userId})
    .then(data => {
        if(data.length === 0) {
            const cartData = new Cart({
                userId: req.body.userId,
                funds: [{
                    fundName:req.body.fundName,
                    amount: req.body.amount,
                    _id: new ObjectID()
                }]
            })
        
            cartData.save()
            .then(data=>{
                res.status(200).json({data:data,msg:"fund Added in Cart Successfully!"})
            }).catch(err=>{
                res.status(500).send({
                    message: err.message || "Error"
                });
            })
        } else {
            Cart.updateOne(
                { "userId": req.body.userId },
                { "$push": { "funds": { "fundName": req.body.fundName, "amount": req.body.amount, "_id": new ObjectID() } } }
            )
            .then(data => {
                res.status(200).json({data:data,msg:"fund Added in Cart Successfully!"})
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
        Cart.findOne({"userId": req.query.userId})
        .then(cartContent => {
            res.send(cartContent);
        })
    } catch {
        res.status(500).send({
            message: err.message || "Error"
        });
    }
};


exports.remove = async(req,res) => {
    let fundId = req.body.map(e =>{
        return ObjectID(e)
    })    
    try {
        let data = await Cart.findOneAndUpdate({"userId":req.query.userId},{"$pull":{"funds":{"_id":{"$in":fundId}}}})
        res.status(200).send({
            message:"Deleted"
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || "Error"
        });
    }
}


