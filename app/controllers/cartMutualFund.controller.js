const CartMF = require("../models/cartMutualFund.model")

exports.save = (req,res) => {
    const cartMutualFund = new CartMF({
        fundName:req.body.fundName,
        amount: req.body.amount,
        userId: req.body.userId
    })

    cartMutualFund.save()
    .then(data=>{
        res.status(200).json({data:data,msg:"fund Added in Cart Successfully!"})
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Error"
        });
    })
}



exports.list = (req, res) => {
    CartMF.find()
    .then(cartMutualFund => {
        res.send(cartMutualFund);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error"
        });
    });
};


