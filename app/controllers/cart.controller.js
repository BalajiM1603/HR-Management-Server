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


exports.list = (req, res) => {
    Cart.findOne({"userId": req.query.userId})
    .then(cartContent => {
        res.send(cartContent);
        console.log(cartContent);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error"
        });
    });
};


exports.remove = (req,res) => {
    Cart.findOne({"userId":req.query.userId}).findOneAndDelete({_id:req.query.objectId})
    .then(Cart => {
        res.send(200).json(Cart);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error"
        });
    });
}


